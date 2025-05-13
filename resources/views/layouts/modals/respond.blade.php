<!-- Respond Modal -->
<div id="respondModal" class="fixed inset-0 bg-black/45 m items-center justify-center z-50 hidden transition-all duration-300">
    <div class="bg-white w-full max-w-md rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[90vh] mx-4 transform transition-all">
        <!-- Modal Header -->
        <div class="px-6 py-4 bg-blue-600 border-b border-blue-700 flex justify-between items-center">
            <h2 class="text-lg font-semibold text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                Respond to Report
            </h2>
            <button onclick="closeRespondModal()" class="text-white hover:text-blue-100 focus:outline-none transition-colors">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
            <form id="respondForm" action="{{ route('worker.reports.respond') }}" method="POST">
                @csrf
                <input type="hidden" name="report_id" id="modalReportId">

                <!-- Status Selection -->
                <div class="mb-4">
                    <label for="modalStatusSelect" class="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <select name="status" id="modalStatusSelect" class="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 appearance-none">
                            <option value="pending">Pending</option>
                            <option value="in_progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Response Input -->
                <div class="mb-6">
                    <label for="modalResponse" class="block text-sm font-medium text-gray-700 mb-1">Response</label>
                    <div class="relative">
                        <div class="absolute top-3 left-3 flex items-start pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </div>
                        <textarea name="response" id="modalResponse" rows="4" class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your detailed response here..."></textarea>
                    </div>
                    <p class="mt-1 text-xs text-gray-500">Your response will be visible to the user who submitted the report</p>
                </div>

                <!-- Submit Button -->
                <div class="flex justify-end space-x-3">
                    <button type="button" onclick="closeRespondModal()" class="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        Cancel
                    </button>
                    <button type="submit" class="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Submit Response
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    function openRespondModal(reportId, currentStatus) {
        document.getElementById("modalReportId").value = reportId;
        document.getElementById("modalStatusSelect").value = currentStatus;
        document.getElementById("respondModal").classList.remove("hidden");
        document.getElementById("respondModal").classList.add("flex");
    }

    function closeRespondModal() {
        document.getElementById("respondModal").classList.add("hidden");
        document.getElementById("respondModal").classList.remove("flex");
    }
</script>