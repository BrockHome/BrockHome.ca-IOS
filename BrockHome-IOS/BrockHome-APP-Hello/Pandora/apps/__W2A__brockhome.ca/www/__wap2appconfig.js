!(function() {
    wap2app.appid = '__W2A__brockhome.ca';
    var define = wap2app.define;
    var require = wap2app.require;
    var App = wap2app.App;
    var Page = wap2app.Page;
    var __w2aRoute;
    /************************sitemap begin************************************/
    /*暂时先集成进去兼容旧版本基座*/
    window.__wap2app_sitemap = {"global":{"webviewParameter":{"titleNView":true,"statusbar":{"style":"light","background":"#3c3c3c"},"appendCss":"","appendJs":""},"easyConfig":{}},"pages":[{"webviewId":"__W2A__brockhome.ca","matchUrls":[{"href":["^https\\:\\/\\/brockhome\\.ca\\/forum\\.php\\?mod\\=guide&view\\=newthread&mobile\\=2$"]},{"href":["^https\\:\\/\\/brockhome\\.ca\\/forum\\.php\\?mod\\=guide&view\\=newthread&mobile\\=2\\/$"]},{"href":["^https\\:\\/\\/brockhome\\.ca\\/forum\\.php\\?forumlist\\=1&mobile\\=2$"]},{"href":["^https:\\/\\/brockhome\\.ca\\/home\\.php[\\s\\S]mod=space&uid=\\d+&do=profile&mycenter=\\d+&mobile=2$"]},{"href":["^https\\:\\/\\/brockhome\\.ca\\/home\\.php\\?mod\\=follow&mobile\\=2$"]}],"webviewParameter":{"titleNView":true,"statusbar":{"background":"#3c3c3c"},"appendCss":""},"easyConfig":{}},{"webviewId":"login_page","matchUrls":[{"href":["^https\\:\\/\\/brockhome\\.ca\\/member\\.php\\?mod\\=logging&action\\=login&mobile\\=2$"]}],"webviewParameter":{"titleNView":true}},{"webviewId":"membership_page","matchUrls":[{"href":["^https:\\/\\/brockhome\\.ca\\/krunk-api\\/membership\\.html$"]}],"webviewParameter":{"titleNView":true}}]};
    /************************sitemap end**************************************/

    /************************util begin***************************************/
    
    /************************util end*****************************************/
    /************************nviews begin*************************************/
    
    /************************nviews end***************************************/
    /************************pages begin**************************************/
    define('app.js', function (require, module) {
    App({
    options: {
        debug: true
    },
    /**
     * 当wap2app初始化完成时，会触发 onLaunch
     */
    onLaunch: function() {
        console.log('launch');
    },
    /**
     * 当wap2app启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function() {
        console.log('show');
    },
    /**
     * 当wap2app从前台进入后台，会触发 onHide
     */
    onHide: function() {
        console.log('hide');
    }
});
Page('__W2A__brockhome.ca', { //首页扩展配置
    onShow: function() {

    },
    onClose: function() {

    }
});
Page('login_page', { //扩展配置
    onShow: function() {
		
         
    },
    onClose: function() {
		var loginWebview = plus.webview.getWebviewById("__W2A__brockhome.ca");  
        
            loginWebview.reload();//刷新登录页
			console.log('reload');
    }
});
});
require("app.js");
    /************************pages end****************************************/

    wap2app.initSitemap();
})();
