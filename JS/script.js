const loadData = async () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url);
    const data = await res.json();
    showdisplayData(data.data.tools)
}

const showdisplayData = (data) => {
    // data = data.slice(0, 6)
    const universeParent = document.getElementById('universe_parent'); 
    data.forEach(data => {

        const eachDiv = document.createElement('div');
        eachDiv.classList.add('each-div')
        eachDiv.innerHTML = `
            <img class="w-full md:h-[300px] h-[200px]" src="${data.image}"/>
            <h2 class="mt-5 font-bold text-xl">Features</h2>
            <p class="mt-2">1. ${data.features[0]}</p> 
            <p>2. ${data.features[1]}</p> 
            <p>3. ${data?.features[2]}</p> 
            <hr class="mt-5"/> 
            <div class="flex justify-between items-center">
                <div> 
                    <p class="mt-5 font-bold text-xl text-gray-600">${data.name}</p>
                    <p class="mt-2">Date: ${data.published_in}</p>                
                </div>
                <div>
                    <i class="fa-solid fa-arrow-right bg-red-200 rounded-full text-white p-2 pointer"></i>
                </div>
            </div>
        `
        universeParent.appendChild(eachDiv)
    })
}

 

loadData()