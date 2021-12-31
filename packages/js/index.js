/*
 * @Author: your name
 * @Date: 2021-12-31 15:34:35
 * @LastEditTime: 2021-12-31 17:34:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /emoji-input/packages/index.js
 */
var Emoji = function() {
    var init = function(opts) {
        this.state = {
            startPos: 0,
            endPos: 0,
            emoji: [
                [{ name: '哈哈', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_20.png' },
                { name: '嘻嘻', url: ' //n.sinaimg.cn/finance/new_feedback/face_sina_19.png' },
                { name: '允悲', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_34.png' },
                { name: '可爱', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_16.png' },
                { name: '泪', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_33.png' },
                { name: '笑cry', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_21.png' },
                { name: '辣眼睛', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_141.png' },
                { name: '上涨', url: '//n.sinaimg.cn/finance/new_feedback/kanzhangv2_org.png' },
                { name: '下跌', url: '//n.sinaimg.cn/finance/new_feedback/kandiev2_org.png' },
                { name: '加仓', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_8.png' },
                { name: '减仓', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_9.png' },
                { name: '停', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_146.png' },
                { name: '复牌', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_4.png' },
                { name: '抄底', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_7.png' },
                { name: '买进', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_10.png' },
                { name: '卖出', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_11.png' },
                { name: '看多', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_12.png' },
                { name: '看空', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_13.png' },
                { name: '满仓', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_5.png' },
                { name: '仓', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_147.png' },
                { name: 'delete', url: '//n.sinaimg.cn/finance/3312ac46/20211220/DeleteEmoticonBtn.png' }
                ],
                [
                    { name: '关灯吃面', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_140.png' },
                    { name: '收割', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_139.png' },
                    { name: '爆炸', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_145.png' },
                    { name: '跳水', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_142.png' },
                    { name: '威武', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_118.png' },
                    { name: '中签', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_143.png' },
                    { name: '主力', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_144.png' },
                    { name: '污', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_36.png' },
                    { name: '可怜', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_30.png' },
                    { name: '挖鼻屎', url: '//n.sinaimg.cn/finance/new_feedback/2018new_wabi_org.png' },
                    { name: '汗', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_25.png' },
                    { name: '喵喵', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_43.png' },
                    { name: '二哈', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_44.png' },
                    { name: '失望', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_42.png' },
                    { name: '哼', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_27.png' },
                    { name: '黑线', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_24.png' },
                    { name: '思考', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_51.png' },
                    { name: '悲伤', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_32.png' },
                    { name: '怒', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_28.png' },
                    { name: '花心', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_39.png' },
                    { name: 'delete', url: '//n.sinaimg.cn/finance/3312ac46/20211220/DeleteEmoticonBtn.png' }
                ],
                [
                    { name: '耶', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_90.png' },
                    { name: '握手', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_87.png' },
                    { name: '赞', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_89.png' },
                    { name: '作揖', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_88.png' },
                    { name: '弱', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_92.png' },
                    { name: '酷', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_49.png' },
                    { name: '疑问', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_52.png' },
                    { name: '笑而不语', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_47.png' },
                    { name: '并不简单', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_50.png' },
                    { name: '费解', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_53.png' },
                    { name: '吐', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_61.png' },
                    { name: '吃瓜', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_78.png' },
                    { name: '抓狂', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_69.png' },
                    { name: '委屈', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_29.png' },
                    { name: '坏笑', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_45.png' },
                    { name: '太开心', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_17.png' },
                    { name: '阴险', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_46.png' },
                    { name: '亲亲', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_38.png' },
                    { name: '挤眼', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_22.png' },
                    { name: '偷笑', url: '//n.sinaimg.cn/finance/new_feedback/face_sina_48.png' },
                    { name: 'delete', url: '//n.sinaimg.cn/finance/3312ac46/20211220/DeleteEmoticonBtn.png' }
                ]
            ]
        }
        this._initDoms();
        this._initEvent();
        this._formatEmojiData();
        this._initPrototype();
    }
    init.prototype = {
        // 初始化dom
        _initDoms: function() {
            this._renderData({
                target: 'swiper-wrapper',
                tpl: 'swiper-slide-tpl',
                data: this.state.emoji
            });
            new Swiper('.swiper-container', {
                observer: true, // 修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        },
        // 渲染数据
        _renderData: function(options) {
            var _target = options.target;
            var _tpl = options.tpl;
            var _data = options.data;
            var _update = options.update;
            if (_update) {
                $('#' + _target).empty();
            }
            var interText = doT.template(document.getElementById(_tpl).text);
            $('#' + _target).append(interText(_data))
        },
        // 转换emoji
        _emojiFormat: function (str) {
            var reg = /\[([^\[\]]*)\]/g;
            var mat;
            var txt;
            if (!str) return '';
            str = str.toString();
            mat = str.match(reg);
            if (mat) {
                for (var i = 0; i < mat.length; i++) {
                    txt = mat[i].slice(1, mat[i].length - 1);
                    if (this.state.emojiMap[txt]) {
                        str = str.replaceAll('\\[' + txt + '\\]', '<span class="emoji-center"><img class="emoji-icon" src="' + this.state.emojiMap[txt] + '" /></span>')
                    }
                }
            }
            return str
        },
        // 格式化emoji数据
        _formatEmojiData: function() {
            let emojiMap = {};
            this.state.emoji.forEach(item => {
                item.forEach(i => {
                    emojiMap[i.name.toString()] = i.url;
                })
            })
            this.state.emojiMap = emojiMap;
        },
        // 初始化事件
        _initEvent: function() {
            let that = this;
            // 表情点击事件
            $(document).on('click','.swiper-item',function() {
                //第一步，获取输入框对象
                var inputDom = document.getElementsByTagName('textarea')[0];
                var txt = inputDom.value;
                var emojiTxt = '[' + $(this).attr('title') + ']'
                //第二步，获取光标的开始位置与结束位置
                if (!that.state.startPos && that.state.startPos != 0) {
                    that.state.startPos = inputDom.selectionStart,
                        that.state.endPos = inputDom.selectionEnd;
                }

                if (emojiTxt == '[delete]') {
                    if (that.state.startPos == 0) return;
                    inputDom.value = txt.slice(0, that.state.startPos - 1) + txt.slice(that.state.startPos);
                    that.state.startPos = that.state.startPos - 1
                    // setCaretPosition(inputDom, that.state.startPos - 1);
                } else {
                    inputDom.value = txt.slice(0, that.state.startPos) + emojiTxt + txt.slice(that.state.startPos);
                    that.state.startPos = that.state.startPos + emojiTxt.length
                    // setCaretPosition(inputDom, that.state.startPos + emojiTxt.length);
                }
            })
            $('textarea').on('change',function() {
                console.log($(this).val())
            })
            $('textarea').blur(function () {
                var inputDom = document.getElementsByTagName('textarea')[0];
                that.state.startPos = inputDom.selectionStart
            })
            $('button').on('click',function() {
                let str = $('.emoji-textarea').val();
                $('.show-text').html(that._emojiFormat(str));
            })
        },
        // 初始化string方法
        _initPrototype: function() {
            String.prototype.replaceAll = function () {
                var args = arguments;
                var searchValue = args[0];
                var newValue = args[1];
                //如果搜索的字符与替换的新字符有不存在的，则不做任何操作，返回原字符串
                if (!searchValue || !newValue) return this.toString();
                var regParam = "g";
                if (searchValue instanceof RegExp) {//如果是正则，需判断是否传入 g i m等标示
                    //global: true //不用处理，默认就是全局
                    searchValue.ignoreCase ? (regParam += "i") : null;
                    searchValue.multiline ? (regParam += "m") : null;
                }
                //这里用到了正则的构造函数
                var reg = new RegExp(searchValue, regParam);
                return this.replace(reg, newValue);
            }
        }
    }
    return init;
}();