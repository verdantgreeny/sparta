document.addEventListener('DOMContentLoaded', () => {
    const menu = [
        { name: '아메리카노', price: 4100 },
        { name: '카페라떼', price: 4600 },
        { name: '카푸치노', price: 4600 },
        { name: '카라멜 마끼아또', price: 5800 },
        { name: '자바 칩 프라푸치노', price: 6300 },
        { name: '딸기 요거트 블렌디드', price: 6300 }
    ];

    let order = {};
    let totalPrice = 0;

    const menuContainer = document.getElementById('menu');
    const orderList = document.getElementById('order-list');
    const totalPriceElement = document.getElementById('total-price');
    const submitOrderButton = document.getElementById('submit-order');



    // TODO-1 담당 : 장미경 //
    menu.forEach((item, index) => {
        let divWrap = document.createElement('div'); // div 생성
        divWrap.id = 'wrap';

        let divMenu = document.createElement('div'); // div 생성
        divMenu.classList.add("coffee");

        let spanName = document.createElement('span'); // span 생성
        spanName.textContent = `${item.name}`;
        spanName.id = 'menuName'
        let spanPrice = document.createElement('span'); // span 생성
        spanPrice.textContent = `₩${item.price}`;
        spanPrice.id = 'menuPrice'

        let button = document.createElement('button');
        button.id = 'addOrder';
        button.innerText = '주문 추가';

        button.setAttribute('data-index', index); // '주문 추가' 버튼에는 각 메뉴 아이템의 인덱스를 data-index 속성으로 저장

        divMenu.appendChild(spanName);
        divMenu.appendChild(spanPrice);
        divWrap.appendChild(divMenu);
        divWrap.appendChild(button);

        menuContainer.appendChild(divWrap)
    });

    // TODO-2 담당 : 이한솔 //
    menuContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            let index = event.target.getAttribute('data-index');
            let selectedmenu = menu[index];

            if (!order[selectedmenu.name]) {
                order[selectedmenu.name] = {
                    price: selectedmenu.price, quantity: 1
                };
            } else {
                order[selectedmenu.name].quantity++;
            }
            totalPrice += selectedmenu.price; // 총 가격 업데이트

            updateOrderList();  // 주문 목록 업데이트
        }
    });



    // 주문 내역 업데이트 함수
    function updateOrderList() {
        orderList.innerHTML = '';
        for (let itemName in order) {
            const orderItem = order[itemName];
            const orderItemElement = document.createElement('li');
            orderItemElement.innerHTML = `
                ${itemName} - ₩${orderItem.price.toLocaleString()} x${orderItem.quantity}
                <button class="remove" data-item="${itemName}">삭제</button>
            `;
            orderList.appendChild(orderItemElement);
        }
        totalPriceElement.textContent = totalPrice.toLocaleString();
    }

    // 아이템 삭제 로직
    orderList.addEventListener('click', (event) => {
        const itemName = event.target.getAttribute('data-item');
        if (event.target.classList.contains('remove')) {
            totalPrice -= order[itemName].price * order[itemName].quantity;
            delete order[itemName];
            updateOrderList();
        }
    });

    // 주문 제출 로직
    submitOrderButton.addEventListener('click', () => {
        if (Object.keys(order).length > 0) {
            alert('주문해 주셔서 감사합니다!');
            order = {};
            totalPrice = 0;
            updateOrderList();
        } else {
            alert('주문 내역이 비어 있습니다!');
        }
    });
});

