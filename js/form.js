$(document).ready(function() {
    $(".removeSpace").keyup(function(){
        var name = $(this).val();
        name = name.replace(/[\s]+/g,"");
        $(this).val(name);
    });
    $("#defaultForm").bootstrapValidator({
            message: "这个值无效",
            /*提示信息*/
            // feedbackIcons:{/*input状态样式*/
            //   valid:"glyphicon fa-check",/*输入有效*/
            //   invalid:"glyphicon fa-times",/*输入无效*/
            //   validating:"glyphicon fa-refresh"/*验证确认中*/
            //   /*最后一个没有逗号(,)*/
            // },
            fields: {
                my_userName: {
                    message: "登陆账号",
                    validators: {
                        notEmpty: {
                            message: "登陆账号不能为空！"
                        }
                  }
                },
                my_psw: {
                    message: "密码",
                    validators: {
                        notEmpty: {
                            message: "密码不能为空！"
                        },
                        stringLength: {
                            min: 6,
                            message: "密码长度至少6位数！"
                        }
                    }
                },
                my_pswRe: {
                    message: "确认密码",
                    validators: {
                        notEmpty: {
                            message: "再次确认密码不能为空！"
                        },
                        identical: { //比较密码相同
                            field: 'my_psw', //需要进行比较的input name值
                            message: '两次输入的密码不一致'
                        }
                    }
                },
                my_pswSec: {
                    message: "安全密码",
                    validators: {
                        notEmpty: {
                            message: "安全密码不能为空！"
                        },
                        stringLength: {
                            min: 6,
                            message: "安全密码长度至少6位数！"
                        }
                    }
                },
                my_pswSecOld: {
                    message: "旧的安全密码",
                    validators: {
                        notEmpty: {
                            message: "旧的安全密码不能为空！"
                        }
                    }
                },
                my_pswSecRe: {
                    message: "确认安全密码",
                    validators: {
                        notEmpty: {
                            message: "确认安全密码不能为空！"
                        },
                        identical: { //比较密码相同
                            field: 'my_pswSec', //需要进行比较的input name值
                            message: '两次输入的安全密码不一致'
                        }
                    }
                },
                my_phone: {
                    message: "手机号码",
                    validators: {
                        notEmpty: {
                            message: "手机号码不能为空！"
                        },
                        regexp: { /* 只需加此键值对，包含正则表达式，和提示 */
                            regexp: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
                            message: '请输入正确的手机号！'
                        }
                    }
                },
                my_phoneCode: {
                    message: "手机验证码",
                    validators: {
                        notEmpty: {
                            message: "手机验证码不能为空！"
                        }
                    }
                },
                my_personName: {
                    message: "真实姓名",
                    validators: {
                        notEmpty: {
                            message: "真实姓名不能为空！"
                        },
                        regexp: {
                            regexp: /^[\u4e00-\u9fa5]+$/,
                            message: "请输入真实姓名！"
                        },
                        stringLength: {
                            min: 2,
                            message: "真实姓名至少2个字！"
                        },
                    }
                },
                my_idNumber: {
                    message: "身份证号码",
                    validators: {
                        notEmpty: {
                            message: "身份证号码不能为空！"
                        },
                        stringLength: {
                            min: 15,
                            message: "身份证号码至少15位！"
                        }
                    }
                },
                my_sex: {
                    validators: {
                        notEmpty: {
                            message: '请选择你的性别！'
                        }
                    }
                },
                my_invite: {
                    message: '推荐人ID',
                    validators: {
                        notEmpty: {
                            message: "推荐人ID不能为空！"
                        },
                        regexp: {
                            regexp: /^[0-9]+$/,
                            message: "请输入正确的推荐人ID！"
                        }
                    }
                },
                validate_code: {
                    message: '验证码',
                    validators: {
                        notEmpty: {
                            message: "验证码不能为空！"
                        },
                        regexp: {
                            regexp: /^[0-9]+$/,
                            message: "请输入正确的验证码！"
                        }
                    }
                },
                my_agree: {
                    message: '验证码',
                    validators: {
                        choice: {
                            min: 1,
                            message: '请同意并遵守用户注册协议！'
                        }
                    }
                },
                my_bankName: {
                    message: "银行名称",
                    validators: {
                        notEmpty: {
                            message: "银行名称不能为空！"
                        },
                        regexp: {
                            regexp: /^[\u4e00-\u9fa5]+$/,
                            message: "请输入正确的银行名称！"
                        }
                    }
                },
                my_bankBranch: {
                    message: "开户支行",
                    validators: {
                        notEmpty: {
                            message: "开户支行不能为空！"
                        }
                    }
                },
                my_bankNum: {
                    message: "银行卡号",
                    validators: {
                        notEmpty: {
                            message: "银行卡号不能为空！"
                        },
                        regexp: {
                            regexp: /^[0-9]*$/,
                            message: "请输入正确的银行卡号！"
                        }
                    }
                },
                my_bankNumRe: {
                    message: "确认银行卡号",
                    validators: {
                        notEmpty: {
                            message: "确认银行卡号不能为空！"
                        },
                        identical: {
                            field: 'my_bankNum',
                            message: '两次输入的银行卡号不一致！'
                        }
                    }
                },
                my_bankAccount: {
                    message: "银行卡账户名",
                    validators: {
                        notEmpty: {
                            message: "银行账户名不能为空！"
                        },
                        regexp: {
                            regexp: /^[\u4e00-\u9fa5]+$/,
                            message: "请输入正确的银行账户名！"
                        }
                    }
                },
                my_tx: {
                    message: "提现金额",
                    validators: {
                        callback: { /* 验证整百数 */
                            callback: function() {
                                var amount = $("input[name*='my_tx']").val();
                                if (amount % 100 == 0 && amount > 0) {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            message: "提现金额只能为整百数！"
                        }
                    }
                },
				my_zc: {
                    message: "转出金额",
                    validators: {
                        callback: { /* 验证整百数 */
                            callback: function() {
                                var amount = $("input[name*='my_tx']").val();
                                if (amount % 100 == 0 && amount > 0) {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            message: "转出金额只能为整百数！"
                        }
                    }
                },
                my_cz: {
                    message: "充值金额",
                    validators: {
                        notEmpty: {
                            message: "充值金额不能为空！"
                        },
                        regexp: {
                            regexp: /^[0-9]+$/,
                            message: "请输入正确的充值金额！"
                        }
                    }
                },
                my_oldPsw: {
                    message: "原始密码",
                    validators: {
                        notEmpty: {
                            message: "原始密码不能为空！"
                        },
                        stringLength: {
                            min: 6,
                            message: "原始密码长度至少6位数！"
                        }
                    }
                },
                my_newPsw: {
                    message: "新的密码",
                    validators: {
                        notEmpty: {
                            message: "新的密码不能为空！"
                        },
                        stringLength: {
                            min: 6,
                            message: "新的密码至少6位数！"
                        }
                    }
                },
                my_confirmPsw: {
                    message: "确认新的密码",
                    validators: {
                        notEmpty: {
                            message: "确认新的密码不能为空！"
                        },
                        identical: { //比较密码相同
                            field: 'my_newPsw', //需要进行比较的input name值
                            message: '两次输入的新密码不一致'
                        }
                    }
                },
                my_newPhone: {
                    message: "新手机号码",
                    validators: {
                        notEmpty: {
                            message: "新手机号码不能为空！"
                        },
                        regexp: { /* 只需加此键值对，包含正则表达式，和提示 */
                            regexp: /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
                            message: '请输入正确的手机号！'
                        }
                    }
                },
                my_live: {
                    validators: {
                        notEmpty: {
                            message: '请选择你的居住地！'
                        }
                    }
                },
                my_payee: {
                    validators: {
                        notEmpty: {
                            message: '收款人账号不能为空！'
                        }
                    }
                },
                my_user: {
                    message: "昵称",
                    validators: {
                        notEmpty: {
                            message: "昵称不能为空！"
                        },
                        regexp: { /* 只需加此键值对，包含正则表达式，和提示 */
                            regexp: /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
                            message: '请输入正确的手机号！'
                        }
                    }
                },
            }
        })
        .on('success.form.bv', function(e) { //点击提交之后
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data 提交至form标签中的action，result自定义
            $.post($form.attr('action'), $form.serialize(), function(result) {
                //do something...
            });
        });
});
