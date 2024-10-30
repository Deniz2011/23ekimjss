// soru1. Asagidaki value değişkeninin tipini nasıl öğrenirsin?
const value = 42;
console.log(typeof value); // Çıktı: "number"
//**JavaScript’te bir değişkenin tipini öğrenmek için typeof operatörünü kullanabiliriz. typeof operatörü, değişkenin türünü string olarak döndürür.  */

// soru2. Asagidaki name değişkeninin uzunluğunu bulmak için hangi metodu kullanırsın? Kod ile göster.
const name = "Merhaba Dünya";
console.log(name.length); // Çıktı: 14
//** Bir string değişkeninin uzunluğunu bulmak için length özelliğini kullanabiliriz.  */

// soru3. Asagidaki city string’ini büyük harflere çevirmek için hangi metodu kullanırsın?
const city = "istanbul";
const upperCity = city.toUpperCase();
console.log(upperCity); // Çıktı: "ISTANBUL"
//** Bir string'i büyük harflere çevirmek için toUpperCase() metodunu kullanabiliriz. */

// soru4. Asagidaki number değişkeninin tam sayı olup olmadığını kontrol eden bir fonksiyon yaz.
const number = 42.5;
function isInteger(num) {
    return Number.isInteger(num);
}
console.log(isInteger(number));
//** Bir sayının tam sayı olup olmadığını kontrol etmek için Number.isInteger() metodunu kullanabiliriz. */

// soru5. Asagidaki fruits ve vegetables dizilerini birleştirip tek bir dizi haline getiren bir yöntem kullan.
const fruits = ["elma", "armut"];
const vegetables = ["havuç", "lahana"];
const combined = fruits.concat(vegetables);
console.log(combined); // Çıktı: ["elma", "armut", "havuç", "lahana"]
//** İki dizi birleştirmek için concat() metodunu veya spread operatörünü (...) kullanabiliriz. */

// soru6. Asagidaki userInput değişkeninin başındaki ve sonundaki boşlukları silmek için hangi metodu kullanırsın?
const userInput = "    JavaScript öğreniyorum    ";
const trimmedInput = userInput.trim();
console.log(trimmedInput); // Çıktı: "JavaScript öğreniyorum"
//** Bir string'in başındaki ve sonundaki boşlukları silmek için trim() metodunu kullanabiliriz. */

// soru7. Asagidaki num değişkenini string tipine çeviren bir yöntem göster.
const num = 123;
const strNum = String(num);
console.log(strNum); // Çıktı: "123"
//** Bir sayıyı string tipine çevirmek için String() fonksiyonunu veya toString() metodunu kullanabiliriz.  */

// soru8. Asagidaki mixedArray dizisindeki her elemanın tipini typeof kullanarak kontrol eden bir döngü yaz.
const mixedArray = [42, "JavaScript", true, null];
mixedArray.forEach((element) => {
    console.log(typeof element);});
//** mixedArray dizisindeki her elemanın tipini kontrol etmek için bir döngü kullanabiliriz.  forEach() metodu ile her elemanın tipini typeof kullanarak bulabiliriz.
// null değerinin tipi object olarak döner. Bu, JavaScript’in bir özelliğidir. */

// soru9. Asagidaki decimalNumber değişkenini 2 ondalık basamağa yuvarlayan bir kod yaz.
const decimalNumber = 5.6789;
const roundedNumber = decimalNumber.toFixed(2);
console.log(roundedNumber); // Çıktı: "5.68"
//** Bir sayıyı belirli bir ondalık basamağa yuvarlamak için toFixed() metodunu kullanabiliriz. */

// soru9. Asagidaki sentence değişkeni içinde "eğlenceli" kelimesini içerip içermediğini kontrol eden bir yöntem yaz.
const sentence = "JavaScript çok eğlenceli!";
const containsWord = sentence.includes("eğlenceli");
console.log(containsWord); // Çıktı: true
//** Bir string'in belirli bir kelimeyi içerip içermediğini kontrol etmek için includes() metodunu kullanabiliriz. */

// soru10. Asagidaki greeting değişkeninde "Dünya" kelimesini "Evren" olarak değiştiren bir yöntem yaz.
const greeting = "Merhaba Dünya";
const newGreeting = greeting.replace("Dünya", "Evren");
console.log(newGreeting);
//** Bir string içinde belirli bir kelimeyi değiştirmek için replace() metodunu kullanabiliriz. */

// soru11. Asagidaki floatNumber değişkenini en yakın tam sayıya yuvarlayan bir yöntem yaz.
const floatNumber = 4.7;
const roundedNumber1 = Math.round(floatNumber);
console.log(roundedNumber1); // Çıktı: 5
//**Bir float sayısını en yakın tam sayıya yuvarlamak için Math.round() metodunu kullanabiliriz.  */

// soru12. Asagidaki colors dizisinin sonuna "mavi" rengini ekleyen bir yöntem yaz.
const colors = ["kirmizi", "yeşil"];
colors.push("mavi");
console.log(colors); // Çıktı: ["kirmizi", "yeşil", "mavi"]
//**push kodu,  dizinin sonuna öğeyi ekler. */

// soru13. Asagidaki words string’ini virgüllerle ayrılmış bir dizi haline getir.
const words = "Elma, Armut, Muz";
const wordsArray = words.split(", ");
console.log(wordsArray); // Çıktı: ["Elma", "Armut", "Muz"]
//**Bir string'i virgüllerle ayrılmış bir dizi haline getirmek için split() metodunu kullanabiliriz. */

// soru14. Asagidaki animals dizisinin sonundaki elemanı silen bir yöntem yaz.
const animals = ["kedi", "köpek", "kuş"];
animals.pop();
console.log(animals);
//**animals dizisinin sonundaki elemanı silmek için pop() metodunu kullanabiliriz. */

// soru15. Asagidaki text içinde "HARİKA" kelimesini, büyük/küçük harf farkını göz ardı ederek arayan bir yöntem yaz.
const text = "JavaScript harika!";
const searchWord = "HARİKA";
// text içinde "HARİKA" kelimesinin varlığını kontrol et
const containssWord = text.toLowerCase().includes(searchWord.toLowerCase().replace("!", ""));
console.log(containssWord); // Çıktı: true

// soru16. Asagidaki numara değişkenini aşağıya doğru en yakın tam sayıya yuvarlayan bir yöntem yaz.
const numara = 4.9;
const roundedNumber2 = Math.floor(numara);
console.log(roundedNumber2); // Çıktı: 4
//** Bir float sayısını aşağıya doğru en yakın tam sayıya yuvarlamak için Math.floor() metodunu kullanabiliriz. */

// soru17. Asagidaki tech dizisinin içinde "Python" olup olmadığını kontrol eden bir yöntem yaz.
const tech = ["JavaScript", "Python", "Ruby"];
const containsPython = tech.includes("Python");
console.log(containsPython); // Çıktı: true
//** tech dizisinin içinde "Python" kelimesinin olup olmadığını kontrol etmek için includes() metodunu kullanabiliriz. */

// soru18. Asagidaki phrase string’inin son karakterini bulan bir yöntem yaz.
const phrase = "JavaScript öğreniyorum!";
const lastCharacter = phrase.charAt(phrase.length - 1);
console.log(lastCharacter); // Çıktı: "!"
//** Bu kod, phrase string'inin uzunluğunu alarak son karakterin indeksini belirler ve charAt() metoduyla o karakteri elde eder. Sonuç olarak, ! karakterini döner. */

// soru19. Asagidaki quote string’inin 7. karakterinden itibaren kalan kısmını alıp yazdıran bir yöntem yaz.
const quote = "Hayatta en hakiki mürşit ilimdir.";
const remainingPart = quote.slice(6); // 7. karakterden itibaren (0 tabanlı indeks)
console.log(remainingPart); // Çıktı: "a en hakiki mürşit ilimdir."
//** Bir string'in belirli bir karakterinden itibaren kalan kısmını almak için slice() metodunu kullanabiliriz. */

// soru20. Asagidaki zorSoru içinde "JavaScript" kelimesinin kaç kez geçtiğini bulan bir yöntem yaz.
const zorSoru = "JavaScript seviyorum çünkü JavaScript çok güçlü.";
const wordToCount = "JavaScript";
// Kelimeyi dizi haline getir ve uzunluğunu kontrol et
const count = zorSoru.split(wordToCount).length - 1;
console.log(count); // Çıktı: 2
//** Bir string içinde belirli bir kelimenin kaç kez geçtiğini bulmak için split() metodunu kullanarak kelimeyi ayırabilir ve ardından dizinin uzunluğunu kontrol edebiliriz. */