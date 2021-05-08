var images=
[
"familybook.jpg","father.jpg","mother.jpg","grandma.jpg","me.jpg"
];

var names=
[
"family book","Bharath Yadav","Madhura Yadav","Nagarathnamma","Mukund Yadav"
];

var i=0;

function update()
{
i++;
var num_of_fam_memb=4;
if(i>num_of_fam_memb)
{
 i=0;
}
var all_images=images[i];
var all_names=names[i];

document.getElementById("family_member_img").src=all_images;
document.getElementById("family_member_name").innerHTML=all_names;
}