function decodeUplink(input) {
  data=input.bytes;
  final_data=[];
  for(i = 0; i < data.length; i += 4){

  var buf = new ArrayBuffer(4);

  var view = new DataView(buf);

  // set bytes
  data.slice(i,i+4).reverse().forEach(function (b, i) {
    view.setUint8(i, b);
  });
  var num = view.getFloat32(0);
  final_data.push(num)
 }
  return {
    data: {
      data: final_data
    },
    warnings: [],
    errors: []
  };
}
