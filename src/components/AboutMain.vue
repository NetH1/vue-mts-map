<template>
    <div class="about">
    <div class="container">
      <div class="main-div">
        <div class="div-content">
          <div>
            <h2>О проекте</h2>
            <p>Наш проект создан для каких-то важных целей и поможет вам</p>
          </div>
          <div>
            Даже самый заядлый путешественник откроет для себя в Казахстане много интересного и прекрасного: горные вершины, покрытые снегом, обширные плоскогорья, глубокие реки, засушливые пустыни, бескрайние поля, покрытые цветам и девственные заповедные леса.
<br>
<br>
Невозможно рассказать обо всех живописных уголках страны на нескольких страницах. Незабываемы наскальные рисунки и скульптуры национального парка Баянаул, природный заповедник Кургалжин, где можно увидеть более чем 300 видов растений и самую северную в мире колонию фламинго.
          </div>
        </div>
        <div class="div-image">
          <img src="../assets/images/about.png" alt="">
        </div>
      </div>
    </div>
    <YandexMap />
  </div>
</template>
<script>
import YandexMap from './AboutC/YandexMap.vue'

export default {

  data() {
    return {

    }
  },
  components: { YandexMap}
}
</script>
<style lang="scss" scoped>
.bg-black{
  background: #000;
}
yandex-map {
  width: 100%;
  height: 100vh;
}
.about{
  background: #F5F5F5;
}
.main-div{
  display: flex;
  justify-content: space-evenly;
  h2{
    font-size: 46px;
    line-height: 52px;
    color:#5C5754;
    text-transform: uppercase;
  }
  p{
    font-size: 12px;
    line-height: 22px;
    color:#AB9995;
  }

}
</style>