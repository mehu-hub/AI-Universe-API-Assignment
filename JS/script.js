const loadData = async () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url);
    const data = await res.json();
    showdisplayData(data.data.tools)
}

const showdisplayData = (data) => {
    data = data.slice(0, 9)

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
            <div class="flex justify-between items-center" onclick="my_modal_1.showModal(), loadModalData('${data.id}')">
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

const loadModalData = async (id) => {
    const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json()
    showModalData(data)
}

const showModalData = (data) => {
    console.log(data.data.image_link[1])
    const modalLeft = document.getElementById('modal_left');
    modalLeft.innerHTML = `
            <div>

                <div>
                    <div>
                        <img src="${data.data.image_link[0]}"/>
                    </div>
                </div>
                <div class="mt-2">
                <p class="text-2xl font-bold">${data.data.description}</p>
                <div class="md:flex items-center mt-5 gap-5">
                    <div class="flex flex-col item-center justify-center bg-white md:w-[130px] md:h-[100px] p-3 rounded text-center text-green-600 font-bold"> 
                        <p>${data.data.pricing[0].price}</p>
                        <p>${data.data.pricing[0].plan}</p> 
                    </div>
                    <div class="md:mt-0 mt-2 flex flex-col item-center justify-center bg-white md:w-[130px] md:h-[100px] p-3 rounded text-center text-orange-600 font-bold">
                        <p>${data.data.pricing[1].price}</p>
                        <p>${data.data.pricing[1].plan}</p> 
                    </div>
                    <div class="md:mt-0 mt-2 flex flex-col item-center justify-center bg-white md:w-[130px] md:h-[100px] p-3 rounded text-center text-red-600 font-bold">
                        <p>${data.data.pricing[2].price}</p>
                        <p>${data.data.pricing[2].plan}</p> 
                    </div>
                </div>
    
                <div class="md:flex justify-between mt-5">
                    <div>
                        <p class="text-2xl font-bold text-gray-600">Features</p>
                        <ul class="mt-3">
                            <li><i class="fa-solid fa-circle-check text-[12px] text-gray-600"></i> ${data.data.features['1'].feature_name}</li>
                            <li><i class="fa-solid fa-circle-check text-[12px] text-gray-600"></i> ${data.data.features['2'].feature_name}</li>
                            <li><i class="fa-solid fa-circle-check text-[12px] text-gray-600"></i> ${data.data.features['3'].feature_name}</li>
                        </ul>
                    </div>
                    <div class="md:mt-0 mt-2">
                        <p class="text-2xl font-bold text-gray-600">Integrations</p>
                        <ul class="mt-3">
                            <li><i class="fa-solid fa-circle-check text-[12px] text-gray-600"></i> ${data.data.integrations[0]}</li>
                            <li><i class="fa-solid fa-circle-check text-[12px] text-gray-600"></i> ${data.data.integrations[1]}</li>
                            <li><i class="fa-solid fa-circle-check text-[12px] text-gray-600"></i> ${data.data.integrations[2]}</li>
                        </ul>
                    </div>
                </div>
                </div>
                
            </div>
        `

}



loadData()