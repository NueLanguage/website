Prism.languages.nue = {
    comment: [
        {
            pattern: /\/\/#([\s\S]*?)#\//,
            greedy: true,
        },
        {
            pattern: /\/\/.*/,
            greedy: true,
        },
    ],
    string: [
        {
            pattern: /("""|''')[\s\S]*?\1/,
            greedy: true,
        },
        {
            pattern: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
            greedy: true,
        },
    ],
    number: {
        pattern:
            /\b(?:0[xX][\da-fA-F_]+|0[bB][01_]+|0[oO][0-7_]+|\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?)(?![\w_])/,
        greedy: true,
    },
    keyword:
        /\b(?:private|var|alias|if|else|for|in|step|while|continue|break|return|this|match|case|function)\b/,
    boolean: /\b(?:true|false)\b/,
    type: /\b(?:table|boolean|number|string|any|void|null)\b/,
    operator:
        /(?:\+\+|--|\+=|-=|\*=|\/=|\^=|==|!=|<=|>=|\|\||->|\.{2,3}|\^|\+|\-|\*|\/|%|\\|=|<|>|!|&|\||#|\?)/,
    function: {
        pattern: /\b[a-zA-Z_]\w*(?=\s*\()/,
        lookbehind: false,
        greedy: true,
    },
    punctuation: /[()[\]{},;.:]/,
    identifier: /\b[a-zA-Z_]\w*\b/,
};