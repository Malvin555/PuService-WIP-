<!-- Edit User Modal -->
<div id="editUserModal" class="fixed flex inset-0 bg-gray-800/50 bg-opacity-60 hidden items-center justify-center z-50 transition-all duration-300">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[80vh] mx-4 overflow-y-auto transform transition-all">
        <!-- Modal Header -->
        <div class="bg-white text-blue-700 px-6 py-4 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 z-10">
            <h3 class="text-lg font-medium text-blue-600">Edit User</h3>
            <button type="button" onclick="closeEditModal()" class="text-gray-400 hover:text-gray-200 focus:outline-none transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        
        <!-- Modal Body -->
        <div class="p-6">
            <form id="editUserForm" method="POST">
                @csrf
                @method('PUT')

                <input type="hidden" name="user_id" id="edit_user_id">

                <div class="space-y-4">
                    <!-- Name Field -->
                    <div>
                        <label for="edit_name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" id="edit_name" name="name" 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                            required>
                    </div>

                    <!-- Email Field -->
                    <div>
                        <label for="edit_email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="edit_email" name="email" 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                            required>
                    </div>

                    <!-- Role Field -->
                    <div>
                        <label for="edit_role" class="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <select id="edit_role" name="role" 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                            required>
                            <option value="admin">Admin</option>
                            <option value="worker">Worker</option>
                            <option value="user">User</option>
                        </select>
                    </div>

                    <!-- Password Field -->
                    <div>
                        <label for="edit_password" class="block text-sm font-medium text-gray-700 mb-1">
                            Password <span class="text-gray-500 text-xs">(leave blank to keep current)</span>
                        </label>
                        <input type="password" id="edit_password" name="password" 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="mt-6 flex justify-end space-x-3">
                    <button onclick="closeEditModal()" 
                        class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        Cancel
                    </button>
                    <button type="submit" 
                        class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        Update User
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    function openEditModal(button) {
        const userId = button.getAttribute('data-id');
        const name = button.getAttribute('data-name');
        const email = button.getAttribute('data-email');
        const role = button.getAttribute('data-role');
    
        document.getElementById('edit_user_id').value = userId;
        document.getElementById('edit_name').value = name;
        document.getElementById('edit_email').value = email;
        document.getElementById('edit_role').value = role;
    
        const form = document.getElementById('editUserForm');
        form.action = `/admin/users/${userId}`;
    
        document.getElementById('editUserModal').classList.remove('hidden');
    }
    
    function closeEditModal() {
        document.getElementById('editUserModal').classList.add('hidden');
    }
</script>
