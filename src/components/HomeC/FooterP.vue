<template>
    <footer class="container">
        <div class="div-line-svg">
            <svg width="536" height="6" viewBox="0 0 536 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.394531 2.59743C174.05 5.59121 349.901 2.93256 534.15 2.4209" stroke="#DC0000" stroke-width="4" stroke-linecap="round"/>
</svg>
<svg width="1377" height="10" viewBox="0 0 1377 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.50879 2.02441C333.776 10.7806 665.942 9.91816 1377 2.65011" stroke="#F9CD02" stroke-width="4" stroke-linecap="round" stroke-dasharray="9 9"/>
</svg>
        </div>
        <div class="main-div-flex">
            <div class="div-flex-image"><img src="../../assets/images/logoi.png" alt=""></div>
            <ul class="div-flex-main-content">
                <div>
                    <li>Алматы</li>
                    <li>Астана</li>
                    <li>Павлодар</li>
                    <li></li>
                </div>
                <div>
                    <li>Петропавловск</li>
                    <li>Семей</li>
                    <li>Караганда</li>
                    <li></li>
                </div>
                <div>
                    <li>Тараз</li>
                    <li>Усть-Каменогорск</li>
                    <li>Актобе</li>
                    <li></li>
                </div>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.div-line-svg {
    display: flex;
    margin-bottom: 69px;
}
.main-div-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom:55px ;

    .div-flex-image{
        cursor: pointer;
    }
    
    .div-flex-main-content{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 50%;
        li{
            list-style: none;
            font-size: 18px;
            line-height: 22px;
            color: #5C5754;
            font-weight: 500;
            margin: 8px;
            cursor: pointer;
        }
    }
}
</style>