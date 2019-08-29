// capitalize every letter of the emoji's name
function EmojiName(str) {
    emoName = str.toLowerCase().split(' ');
    for (var x in emoName) {
        emoName[x] = emoName[x].charAt(0).toUpperCase() + emoName[x].substring(1);
    }
    // Directly return the joined string
    return emoName.join(' ');
}

$(document).ready(function(e) {
    $.get("/api/user_data", function(user) {
        user.umoji.forEach(emo => {
            var emoName = `${emo.name}`;
            $(".report").prepend (
                `<tr>
                    <td>${EmojiName(emoName.replace(/_/g, " "))}</td>
                    <td>${emo.emoji}</td>
                    <td>${emo.user_emojis.user_comment}</td>
                    <td><a class='del-btn btn btn-danger' data-id='${emo.user_emojis.id}' href="javascript:;">Delete <i class='fas fa-trash-alt'></i></a></td>
                </tr>`
            );//end for report's append
        });//end of $.get
    });

    //function to delete the row
    $(document).on("click", ".del-btn", (e) => {
        console.log(e)
        e.preventDefault();
        if(confirm('Are you sure you want to delete this?')) {
            var user_emojis_id = e.target.dataset.id;
            console.log(user_emojis_id);
            $.ajax({
                url: '/api/useremojis/'+user_emojis_id,
                type: 'DELETE',
                success: function(result) {
                    if(result == 1) {
                        location.reload();
                    }
                }
            });
        }
    });

});