var Widget = {
  processData: function (data){
    console.log(data);
  },
  getData: function (){
    var self = this;
    $.ajax({
      url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=DqsF_ZG72xGLbes9l7okhQ&_render=json',
      success: function (data){
        self.processData(data);
      }
    });
  }
};