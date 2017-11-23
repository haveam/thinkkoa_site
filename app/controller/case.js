/**
 * Controller
 * @return
 */
const base = require('./base');

module.exports = class extends base {
    //构造方法
    init(ctx, app){
        //调用父类构造方法
        super.init(ctx, app);
    }
    
    //控制器默认方法
    indexAction () {
        this.assign('currentNav', 'case');
        return this.render();
    }
};