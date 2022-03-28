function a(word) {
    word = prompt();
        function b(word) {
            function c(word) {
                function d(word) {
                    return word + word + word;
                }
                return d(word);
            }
            return c(word);
        }
        return b(word);
    }
console.log(a());