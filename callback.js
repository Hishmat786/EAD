function order(callback) {
    setTimeout(() => {
        console.log("Getting order detail...");
        callback();  
    }, 2000);
}

function detail(callback) {
    setTimeout(() => {
        console.log("Getting Payment...");
        callback();  
    }, 2000);
}

function payment(callback) {
    setTimeout(() => {
        console.log("Processing Payment...");
        callback();  
    }, 2000);
}

function email() {
    console.log("Email sent!");
}

order(() => {
    detail(() => {
        payment(() => {
            email();
        });
    });
});

// payment(() => {
//     email();
// });
