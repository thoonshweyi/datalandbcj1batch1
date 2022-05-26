// Start Header Section
const navbutton = document.querySelector('.navbuttons');
navbutton.addEventListener('click',()=>navbutton.classList.toggle('changes'));

// End Header Section

// Start Gallery Section

const listitems = document.querySelectorAll('.listitems');

const newphotos = document.querySelectorAll('.filter.new'),
        freephotos = document.querySelectorAll('.filter.free'),
        prophotos = document.querySelectorAll('.filter.pro');


listitems.forEach((listitem)=>{

    // console.log(listitem);
    listitem.addEventListener('click',(e)=>{
        removeactivelist();
        e.target.classList.add('active');

        let datafilter = listitem.getAttribute('data-filter');
        // console.log(datafilter);

        if(datafilter === 'all'){

            newphotos.forEach((newphoto)=>{
                newphoto.style.display = 'inline-block';
            });

            freephotos.forEach((freephoto)=>{
                freephoto.style.display = 'inline-block';
            });

            prophotos.forEach((prophoto)=>{
                prophoto.style.display = 'inline-block';
            });
            
        }else if(datafilter === 'new'){

            newphotos.forEach((newphoto)=>{
                newphoto.style.display = 'inline-block';
            });

            freephotos.forEach((freephoto)=>{
                freephoto.style.display = 'none';
            });

            prophotos.forEach((prophoto)=>{
                prophoto.style.display = 'none';
            });

        }else if(datafilter === 'free'){

            newphotos.forEach((newphoto)=>{
                newphoto.style.display = 'none';
            });

            freephotos.forEach((freephoto)=>{
                freephoto.style.display = 'inline-block';
            });

            prophotos.forEach((prophoto)=>{
                prophoto.style.display = 'none';
            });

        }else if(datafilter === 'pro'){
            newphotos.forEach((newphoto)=>{
                newphoto.style.display = 'none';
            });

            freephotos.forEach((freephoto)=>{
                freephoto.style.display = 'none';
            });

            prophotos.forEach((prophoto)=>{
                prophoto.style.display = 'inline-block';
            });
        }
    });

});

function removeactivelist(){
    listitems.forEach(listitem => listitem.classList.remove('active'));
}
// End Gallery Section