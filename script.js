// Simulated asynchronous functions with callbacks

// Fetch user data from a simulated database
function fetchUser(userId, callback) {
    setTimeout(() => {
        console.log(`Fetched user data for user ID: ${userId}`);
        const user = { id: userId, name: 'John Doe', email: 'john@example.com' };
        callback(user);
    }, 1000);
}

// Process user data
function processUserData(user, callback) {
    setTimeout(() => {
        console.log(`Processing data for ${user.name}`);
        const processedData = {
            user,
            processedAt: new Date(),
            status: 'active',
        };
        callback(processedData);
    }, 1000);
}

// Save processed data to a simulated database
function saveUserData(processedData, callback) {
    setTimeout(() => {
        console.log(`Saving processed data for ${processedData.name}`);
        // Simulate a saved user with an ID
        const savedUser = {processedData, savedId: 1 };
        callback(savedUser);
    }, 1000);
}

// Send notification to the user
function sendNotification(savedUser, callback) {
    setTimeout(() => {
        console.log(`Sending notification to ${savedUser.email}`);
        const notification = {
            userId: savedUser.savedId,
            message: `Hello ${savedUser.name}, your data has been processed!`,
        };
        callback(notification);
    }, 1000);
}

// Main function to execute the flow
function mainFlow(userId) {
    fetchUser(userId, (user) => {
        processUserData(user, (processedData) => {
            saveUserData(processedData, (savedUser) => {
                sendNotification(savedUser, (notification) => {
                    console.log(`Notification sent: ${notification.message}`);
                });
            });
        });
    });
}

// Run the main flow with a user ID
mainFlow(1);
