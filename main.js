const textarea = document.getElementById('textarea')
const button = document.getElementById('button')
const display = document.getElementById('display')

const url_regexp = /https?:\/\/([\w-]+\.)+[\w-]+(\/[\w-~ .?%&=]*)*/g

button.addEventListener('click', () => {
    value = textarea.value //テキストエリアから文字を取得
    value = value.replace(url_regexp, addAnker) //urlをaタグに変換
    value = value.replace(/\*\{([^(\*\{)(\}\*)]+)\}\*/g, addBold) //ボルドを変換
    value = value.replace(/### (.+)\n/g, addHeading_3)//#をh3タグに変換
    value = value.replace(/## (.+)\n/g, addHeading_2)//#をh2タグに変換
    value = value.replace(/# (.+)\n/g, addHeading_1) //#をh1タグに変換
    value = value.replace(/\n/g, '</br>') //改行を</br>に変換
    display.innerHTML = value //displayに変換したテキストを挿入

    function addAnker(match) {
        return `<a href="${match}">${match}</a>`
    }
    function addBold(_, p1) {
        return `<span style="font-weight:bold;">${p1}</span>`
    }
    function addHeading_1(_, p1) {
        return `<h1>${p1}</h1>`
    }
    function addHeading_2(_, p1) {
        return `<h2>${p1}</h2>`
    }
    function addHeading_3(_, p1) {
        return `<h3>${p1}</h3>`
    }
})