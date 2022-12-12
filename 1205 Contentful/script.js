var client = contentful.createClient({
    space: 'm87co7gkpndy', // required
    environment: 'master', // optional, defaults to `master`
    accessToken: 'jwj6ir_EplxGrNjlu-60D_l6w7214MUG46o1u_CioFs'
    
});

client.getEntries().then(function(entries) {
entries.items.forEach(function (entry) {
    console.log(entry);
    let blog = document.getElementById("contentful-container")

    let html = 
        `<hr>
        <div class = "content"
            <h2> ${entry.fields.updateNotifier} </h2>
            <div class = "post-info"> 
                <p class = "body"> Last update ${entry.sys.updatedAt} </p>
            </div>
        </div>`
    blog.innerHTML += html
});
});