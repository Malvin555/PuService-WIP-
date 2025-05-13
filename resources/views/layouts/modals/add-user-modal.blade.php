<!-- Add User Modal -->
<div id="add-user-modal" class=" flex fixed inset-0 bg-gray-800/50 bg-opacity-60 hidden items-center justify-center z-50 transition-all duration-300">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[80vh] mx-4 overflow-y-auto transform transition-all">
        <div class="p-4 border-b bg-white text-blue-700 border-gray-200 flex items-center justify-between sticky top-0 z-10">
            <h3 class="text-lg font-semibold text-gray-900">Add User</h3>
        </div>

        <div class="p-6">
            <form id="addUserForm" method="POST" action="{{ route('admin.users.store') }}">
                @csrf
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500" required>
                </div>
            
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500" required>
                </div>
            
                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500" required>
                </div>
            
                <div class="mb-4">
                    <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                    <select id="role" name="role" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500" required>
                        <option value="" disabled selected>Select Role</option> <!-- Added empty value for default selection -->
                        <option value="admin">Admin</option>
                        <option value="worker">Worker</option>
                        <option value="user">User</option>
                    </select>
                </div>
            
                <div class="flex justify-end space-x-3">
                    <button type="button" onclick="closeModal()" class="px-4 py-2 border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none">Cancel</button>
                    <button type="submit" class="px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Save</button>
                </div>
            </form>
            
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const modal = document.getElementById('add-user-modal');
        const openModalButton = document.getElementById('open-user-modal');
        const closeModalButtons = document.querySelectorAll('.close-modal');
        
        function openModal() {
            modal.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        }
        
        // Function to close modal
        function closeModal() {
            modal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }
        
        // Add click event to open modal button
        openModalButton.addEventListener('click', openModal);
        
        // Add click event to close modal buttons
        closeModalButtons.forEach(button => {
            button.addEventListener('click', closeModal);
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        // Close modal with ESC key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    });
</script>
