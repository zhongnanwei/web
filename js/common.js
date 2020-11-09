/*
 * 项目公共接口js
 */

function ajaxFn(_url, Callback) {
  $.ajax({
    url: _url,
    type: 'get',
    dataType: 'json',
    xhrFields: { withCredentials: true },
    success: function (_d) {
      Callback(_d)
    }
  });
}
