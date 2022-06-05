const RenderHtmlApp = {
    data(){
      return{
        rawHtml: '<span style="color: red">Isto deveria ser vermelho</span>'  
      }  
    }
}

Vue.createApp(RenderHtmlApp).mount('#exemple1');