import dayjs from 'dayjs'
export default {
  install(Vue, options) {
    // 压缩图片
    Vue.prototype.photoCompress = function(file, callback) {
      var ready = new FileReader();
      ready.readAsDataURL(file);
      ready.onload = function() {
        var fileResult = this.result;
        var img = new Image();
        img.src = fileResult;
        img.onload = function() {
          var that = this;
          //默认压缩后图片规格
          var quality = 0.7;
          var w = that.width;
          var h = that.height;
          //实际要求
          if(w > 520){
            var r = w / h;
            w = 520;
            h = 520 / r;
          }
          //生成canvas
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          // 创建属性节点
          var anw = document.createAttribute("width");
          anw.nodeValue = w;
          var anh = document.createAttribute("height");
          anh.nodeValue = h;
          canvas.setAttributeNode(anw);
          canvas.setAttributeNode(anh);
          ctx.drawImage(that, 0, 0, w, h);
          var base64 = canvas.toDataURL('image/jpeg', quality);
          // 回调函数返回base64的值
          callback(base64);
        }
      }
    };

    Vue.prototype.dataTime = function(times) {
		let str = '';
		let today = dayjs(dayjs().startOf('date').format('YYYY-MM-DD HH:mm:ss')).valueOf()
		let yesterday = dayjs(dayjs().subtract(1, 'day').startOf('date').format('YYYY-MM-DD HH:mm:ss')).valueOf() 
		let tday = dayjs(dayjs(times).format('YYYY-MM-DD HH:mm:ss')).valueOf()
		if(tday >= today){
			str = dayjs(times).format('HH:mm')
		}else if( yesterday <= tday && tday < today){
			str = '昨天 '+dayjs(times).format('HH:mm')
		}else{
			str = dayjs(times).format('YYYY-MM-DD')
		}
		return str
    }
	

  }
}