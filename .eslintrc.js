module.exports = {
    /**
     *    代码运行在浏览器与node环境中，同时支持es6
     */
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jquery": true //允许是用$符号
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 8
    },
    "globals": { //允许使用的全局变量
       
    },
    "rules": {
        //error
        //函数声明时不能有重复的参数
        "no-dupe-args": "error",
        //对象字面量中不可有重复的key
        "no-dupe-keys": "error",
        //switch中不可有重复的case
        "no-duplicate-case": "error",
        //不可以覆盖function foo(){}这样声明的函数名
        "no-func-assign": "error",
        //不可以在语句块中声明函数
        "no-inner-declarations": [
            "error",
            "functions"
        ],
        //in语句中一定要用小括号括起整个表达式 (key in object)，再做逻辑操作
        "no-negated-in-lhs": "error",
        //isNaN来判断Not A Number
        "use-isnan": "error",
        //校验typeof后，与其作对比的字符串有没有写错
        "valid-typeof": "error",
        //强制使用全等全不等
        "eqeqeq": [
            "error",
            "always"
        ],
        //使用严格模式
        strict: [
            "error",
            "global"
        ],

        //warn
        //箭头函数在必要的时候需要用括号把单个参数括起来
        "arrow-parens": ["warn", "as-needed"],
        //不要在语句块中声明变量，统一提前声明，包括for里面的var
        "block-scoped-var": "warn",
        //for in循环判断hasOwnProperty
        "guard-for-in": "warn",
        //检查有没有没使用的变量
        "no-unused-vars": ["error", {
            "vars": "all",
            "args": "after-used"
        }],
        //定义数组时，中括号和元素之间不要有空格
        "array-bracket-spacing": [
            "warn",
            "never"
        ],
        //语句块两端要用空格 正确：{ return true; }，错误：{return true;}
        "block-spacing": [
            "warn",
            "always"
        ],
        //大括号的位置，左边大括号跟在上一行行末，右边大括号后面跟关键字，如：
        //		if (a) {
        //
        //		} else {
        //
        //		}
        "brace-style": [
            "warn",
            "1tbs"
        ],
        //逗号后面要有空格，前面不可有空格
        "comma-spacing": ["warn", {
            "before": false,
            "after": true
        }],
        //文件末尾要插入一空行
        "eol-last": "error",
        //对象字面量的key中，冒号前不要空格，冒号后要有空格，而且只能有1个空格
        "key-spacing": ["warn", {
            "beforeColon": false,
            "afterColon": true,
            "mode": "strict"
        }
        ],
        //关键字前后必须有一个空格
        "keyword-spacing": "warn",
        //声明函数时，function关键字、函数名、参数列表、函数体左边大括号，必须用空格分开
        // "space-before-function-paren": "warn",
        //字符串用单引号
        // "quotes": [
        //     "warn",
        //     "single"
        // ],
        //在作用域最顶端声明变量，整个作用域中，var、let、const只能出现一次
        // "one-var": ["warn", "always"],
        //不能有多余的分号
        "no-extra-semi": "warn",
        //不能有debugger
        "no-debugger": "warn",
        //tab缩进
        "indent": [
            "warn",
            4,
            { "SwitchCase": 1 }
        ],
        //语句结束必须要有分号
        "semi": [
            "warn",
            "always"
        ],
        //禁用console，允许warn和error
        "no-console": [
            "error",
            {
                "allow": ["warn", "error"]
            }
        ]
    }
}
;
