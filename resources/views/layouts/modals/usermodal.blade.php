
<!-- User View Modal -->
<div id="userModal" class="fixed inset-0 z-50 hidden overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen p-4">
        <!-- Background overlay -->
        <div class="fixed inset-0 bg-black/45" id="modalOverlay" onclick="closeModal()"></div>

        <!-- Modal panel -->
        <div class="bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-md relative">
            <!-- Modal header -->
            <div class="bg-white-600 border-b border-gray-200 px-4 py-3">
                <h3 class="text-lg font-medium text-blue-600">User Information</h3>
            </div>

            <!-- Modal content -->
            <div class="p-4">
                <div class="flex items-center mb-4">
                    <div id="userInitials" class="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-xl">
                        AB
                    </div>
                    <div class="ml-4">
                        <h4 id="userName" class="text-xl font-bold">User Name</h4>
                        <p id="userEmail" class="text-gray-600">user@example.com</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="border-r pr-4">
                        <p class="text-sm text-gray-500">User ID</p>
                        <p id="userId" class="font-medium">#001</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500">Role</p>
                        <p id="userRole" class="font-medium capitalize">admin</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="border-r pr-4">
                        <p class="text-sm text-gray-500">Reports Submitted</p>
                        <p id="userReports" class="font-medium">10</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500">Joined Date</p>
                        <p id="userJoined" class="font-medium">Jan 1, 2023</p>
                    </div>
                </div>
            </div>

            <!-- Modal footer -->
            <div class="bg-gray-50 px-4 py-3 flex justify-end">
                <button type="button" onclick="closeModal()" class="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Close
                </button>
            </div>
        </div>
    </div>
</div>

<!-- Simple JavaScript for Modal Functionality -->
<script>
    function showUserModal(id, name, email, role, reports, joinedDate) {
        document.getElementById('userInitials').innerText = name.substring(0, 2);
        document.getElementById('userName').innerText = name;
        document.getElementById('userEmail').innerText = email;
        document.getElementById('userId').innerText = '#0' + id;
        document.getElementById('userRole').innerText = role;
        document.getElementById('userReports').innerText = reports;
        document.getElementById('userJoined').innerText = joinedDate;
        document.getElementById('userModal').classList.remove('hidden');
    }

    function closeModal() {
        document.getElementById('userModal').classList.add('hidden');
    }
</script>
