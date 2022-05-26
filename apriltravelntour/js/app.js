// Start Header Section

const navbtns = document.querySelector('.navbtns');

navbtns.addEventListener('click',()=>{
    navbtns.classList.toggle('changes');
});

//End Header Section


// Start Title Section
const circles = document.querySelectorAll('.circles');
window.addEventListener('scroll',()=>{
    let scrolly = window.scrollY;

    // console.log(scrolly);
    if(scrolly > 100){
        circles.forEach(circle=>circle.classList.add('run'));
    }
    else{
        circles.forEach(circle=>circle.classList.remove('run'));
    }
})

// End Title Section


// Start Why Choose Us Section
const aboutuss = document.querySelectorAll('.aboutuss');

window.addEventListener('scroll',()=>{
    
    const scrolly = window.scrollY;

    // console.log(scrolly);
                                                 
    const dir = ['lefts','bottoms','rights'];
    if(scrolly > 900){
        aboutuss.forEach((aboutus,index) => aboutus.classList.add(`from${dir[index]}`));
    }
    else{
        aboutuss.forEach((aboutus,index) => aboutus.classList.remove(`from${dir[index]}`));
    }

});

// End Why Choose Us Section

// Start Contact Us Section

const contactinfos = document.querySelectorAll('.contactinfos');

window.addEventListener('scroll',()=>{
    
    const scrolly = window.scrollY;

    // console.log(scrolly);
                                                 
   
    if(scrolly > 3500){

        contactinfos.forEach(contactinfo=>contactinfo.classList.add('fromlefts'));
        
    }
    else{
        contactinfos.forEach(contactinfo=>contactinfo.classList.remove('fromlefts'));
    }

});



// End Contact Us Section


// Start Popular Destination 

const desbtns = document.querySelectorAll('.desbtns');
const alldiv = document.getElementById('all'),
        vietnumdiv = document.getElementById('vietnum'),
        thailanddiv = document.getElementById('thailand'),
        singaporediv = document.getElementById('singapore');

desbtns.forEach((desbtn)=>{

    desbtn.addEventListener('click',(e)=>{

        e.preventDefault();

        desbtns.forEach(desbtn=> desbtn.classList.remove('actives'));
        desbtn.classList.add('actives');

        const datafilter = e.target.getAttribute('data-filter');
        // console.log(datafilter);

        if(datafilter === 'all'){

            alldiv.classList.remove('hiddens');
            vietnumdiv.classList.add('hiddens');
            thailanddiv.classList.add('hiddens');
            singaporediv.classList.add('hiddens');

        }else if(datafilter === 'vietnum'){

            alldiv.classList.add('hiddens');
            vietnumdiv.classList.remove('hiddens');
            thailanddiv.classList.add('hiddens');
            singaporediv.classList.add('hiddens');

        }else if(datafilter === 'thailand'){

            alldiv.classList.add('hiddens');
            vietnumdiv.classList.add('hiddens');
            thailanddiv.classList.remove('hiddens');
            singaporediv.classList.add('hiddens');

        }else if(datafilter === 'singapore'){

            alldiv.classList.add('hiddens');
            vietnumdiv.classList.add('hiddens');
            thailanddiv.classList.add('hiddens');
            singaporediv.classList.remove('hiddens');

        }


    });

});

// End Popular Destination