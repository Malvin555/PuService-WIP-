<div id="reportModal" class="fixed inset-0 bg-black/45 bg-opacity-50 items-center justify-center z-50 hidden">
    <div
        class="bg-white mx-5 w-full max-w-md rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[70vh] lg:max-h-[90vh]">
        <!-- Modal Header (Fixed) -->
        <div class="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <h2 class="text-lg font-semibold text-blue-600 truncate max-w-[calc(100%-2rem)]" id="modalTitle"></h2>
            <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Scrollable Content -->
        <div class="p-4 overflow-y-auto flex-1">
            <!-- Image -->
            <div id="modalImageContainer" class="mb-3">
                <img id="modalImage" src="" alt="Image error 909" class="w-full rounded-lg hidden">
            </div>

            <!-- Information -->
            <div class="space-y-3">
                <div>
                    <p class="text-xs font-medium text-gray-500">Status</p>
                    <p id="modalStatus" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"></p>
                </div>
                <div>
                    <p class="text-xs font-medium text-gray-500">Category</p>
                    <p id="modalCategory" class="mt-1 text-sm text-gray-900"></p>
                </div>
                <div>
                    <p class="text-xs font-medium text-gray-500">Address</p>
                    <p id="modalAddress" class="mt-1 text-sm text-gray-900"></p>
                </div>
                <div>
                    <p class="text-xs font-medium text-gray-500">Description</p>
                    <p id="modalDescription" class="mt-1 text-sm text-gray-900"></p>
                </div>
                <div>
                    <p class="text-xs font-medium text-gray-500">Response</p>
                    <p id="modalResponse" class="mt-1 text-sm text-gray-900"></p>
                </div>
                <div>
                    <p class="text-xs font-medium text-gray-500">Submitted on</p>
                    <p id="modalDate" class="mt-1 text-sm text-gray-900"></p>
                </div>
            </div>
        </div>

        <!-- Modal Footer -->
        <div class="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-end space-x-2">
            @if(auth()->check() && (auth()->user()->role === 'admin' || auth()->user()->role === 'worker'))
                <form id="deleteForm" method="POST" action="">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="px-3 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700">
                        Delete
                    </button>
                </form>
            @endif

            <button onclick="closeModal()" class="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Close
            </button>
        </div>


    </div>
</div>



<script>
    function openModal(title, status, category, address, description, response, date, imageUrl) {
        document.getElementById("modalTitle").textContent = title;

        // Set status with appropriate color based on its value
        const statusElement = document.getElementById("modalStatus");
        statusElement.textContent = status;

        // Clear any existing classes first
        statusElement.className = "px-2 inline-flex text-xs leading-5 font-semibold rounded-full";

        // Add appropriate styling based on status
        if (status.toLowerCase() === "resolved") {
            statusElement.classList.add("bg-green-100", "text-green-800");
        } else if (status.toLowerCase() === "in progress") {
            statusElement.classList.add("bg-yellow-100", "text-yellow-800");
        } else {
            statusElement.classList.add("bg-gray-100", "text-gray-800");
        }

        document.getElementById("modalCategory").textContent = category;
        document.getElementById("modalAddress").textContent = address;
        document.getElementById("modalDescription").textContent = description;
        document.getElementById("modalResponse").textContent = response;
        document.getElementById("modalDate").textContent = date;

        const imageElement = document.getElementById("modalImage");
        if (imageUrl) {
            imageElement.src = imageUrl;
            imageElement.classList.remove("hidden");
        } else {
            imageElement.classList.add("hidden");
        }

        document.getElementById("reportModal").classList.remove("hidden");
        document.getElementById("reportModal").classList.add("flex");
    }

    function closeModal() {
        document.getElementById("reportModal").classList.add("hidden");
        document.getElementById("reportModal").classList.remove("flex");
    }

</script>
