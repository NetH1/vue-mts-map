<template>
  <div class="container">
    <div class="main-div-content">
        <div class="div-content-img">
            <img src="../../assets/images/FirstC.png" alt="">
        </div>
        <div class="div-content-text">
            Немецкая история Верного – Алма-Аты – Алматы начинается буквально с момента основания города в 1854 г. С середины 19 в. здесь в молодом городе Туркестанского края жили и работали не только чиновники немецкого происхождения, но и немецкие ученые и путешественники: ботаник-натуралист А.Шренк, путешественник, врач и исследователь растительного мира Туркестанского края Иоганн-Альберт Регель, садовод К.Штольц, лесоводы братья Баум и другие. 
<br>
<br>
В советский период истории в нашем городе жили и работали немцы – представители творческой и научной интеллигенции, архитекторы, известные спортсмены, врачи и многие другие. Многие из них были депортированы в 1941 г. из различных мест проживания этнических немцев в СССР и расселены в разных областях Казахской ССР, а с ослаблением режима спецпоселения, когда появилась возможностью работать и учиться в столице Казахстана, переехали в Алма-Ату. 
<br>
<br>
<span>Надеемся, что наша экскурсия поможет вам в осмыслении исторического прошлого своего народа и сохранении достойной памяти о нем!</span>
        </div>
    </div>
    <div class="div-download-map">
        <span>Скачать маршрут: Увлекательный маршрут по городу</span>  
        <img src="../../assets/images/downloadpdf.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-div-content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .div-content-img{
        width:40%;
        img{
            display: block;
        }
    }
    .div-content-text{
        width: 50%;
        font-size: 18px;
        line-height: 28px;
        font-weight: 500;
        color: #72767E;
        span{
            color: #5C5754;
        }
    }
}
.div-download-map{
    cursor: pointer;
    margin-top: 71px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px dashed #AB9995;
    padding: 23px 270px;
border-radius: 30px;
font-size: 18px;
        line-height: 28px;
        font-weight: 400;
        color: #5C5754;
        text-transform: uppercase;
        span{
            margin-right: 46px;
        }
}
</style>
