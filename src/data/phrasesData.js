// phrasesData.js

const JSON_DATA = [
  {
    "title": "عبارات الترحيب في بداية الحصة",
    "data": [
      {"en": "Assalamu Alikom", "ar": "السلام عليكم"},
      {"en": "How do you do?", "ar": "كيف حالك؟"},
      {"en": "Nice to meet you!", "ar": "سعدت بلقائك"},
      {"en": "How are you?", "ar": "كيف حالك؟"},
      {"en": "Good morning.", "ar": "صباح الخير"},
      {"en": "Good evening.", "ar": "مساء الخير"},
      {"en": "How is your family?", "ar": "كيف حال أسرتك؟"},
      {"en": "How was your day?", "ar": "كيف كان يومك؟"},
      {"en": "I miss you!", "ar": "اشتقت إليك"},
      {"en": "It's a long time since we have met.", "ar": "لم نلتق منذ وقت طويل"},
      {"en": "Let's start our class!", "ar": "لنبدأ حصتنا"}
    ]
  },
  {
    "title": "عبارات ضبط الصوت ومشاركة الشاشة",
    "data": [
      {"en": "Can you hear me clearly?", "ar": "هل تسمعني بوضوح"},
      {"en": "I'll share the screen now.", "ar": "سأقوم بمشاركة الشاشة الآن."},
      {"en": "Can you see the screen? Kindly, open your mic.", "ar": "هل تستطيع رؤية الشاشة؟ قم بفتح المايك الخاص بك."},
      {"en": "I can hear you clearly.", "ar": "أنا أسمعك بوضوح."},
      {"en": "Please wait, It's loading.", "ar": "انتظر من فضلك يتم التحميل."},
      {"en": "Kindly, open your camera.", "ar": "قم بفتح الكاميرا لديك."},
      {"en": "I can see you now.", "ar": "أستطيع رؤيتك الآن."},
      {"en": "Can you see me?", "ar": "هل تستطيع رؤيتي؟"}
    ]
  },
  {
    "title": "عبارات السؤال عن الواجبات والتكاليف",
    "data": [
      {"en": "Did you practice...?", "ar": "هل تدربت على...؟"},
      {"en": "Did you memorize...?", "ar": "هل حفظت ...؟"},
      {"en": "Did you revise...?", "ar": "هل قمت بمراجعة ...؟"},
      {"en": "What about the homework?", "ar": "ما أخبار الواجب؟"},
      {"en": "Let's start with the H.W!", "ar": "دعنا نبدأ بالواجب."},
      {"en": "Recite your previous memorization, please!", "ar": "قم بتلاوة حفظك السابق من فضلك."}
    ]
  },
  {
    "title": "عبارات التوجيه والتفاعل أثناء الحصة",
    "data": [
      {"en": "Which verse\\surah\\page did we stop at?", "ar": "عند أي آية / سورة / صفحة توقفنا ؟"},
      {"en": "I will read and you repeat after me.", "ar": "سأقرأ وأنت ردد بعدي."},
      {"en": "Repeat this part one more time, please!", "ar": "أعد هذا الجزء مرة أخرى من فضلك."},
      {"en": "Kindly, read this part and I will correct for you.", "ar": "من فضلك اقرأ هذا الجزء وأنا سأصحح لك."},
      {"en": "Try to read more slowly and don't be in hurry, please! Raise your voice a little bit, please!", "ar": "حاول أن تقرأ ببطء أكثر ولا تتعجل من فضلك. ارفع صوتك قليلا من فضلك."},
      {"en": "Look at the screen and listen to me, please!", "ar": "انظر إلى الشاشة واستمع لي من فضلك."},
      {"en": "Read the highlighted part, please!", "ar": "قم بقراءة الجزء المظلل من فضلك."},
      {"en": "Now, Try to read from your memo- ry, not from the book the screen.", "ar": "الآن حاول أن تقرأ غيبا وليس من الكتاب / الشاشة."},
      {"en": "Repeat this verse (...) times, !please", "ar": "قم بإعادة هذه الآية (...) مرات من فضلك."},
      {"en": "Can you repeat it one more time without pausing?", "ar": "هل تستطيع إعادتها مرة أخرى بدون تقطع / توقف ؟"}
    ]
  },
  {
    "title": "عبارات المشكلات التقنية والاتصال",
    "data": [
      {"en": "I can't hear you clearly.", "ar": "لا أستطيع سماعك بوضوح."},
      {"en": "There is some echo.", "ar": "هناك بعض صدى الصوت."},
      {"en": "The sound is cutting.", "ar": "الصوت به تقطيع."},
      {"en": "The sound goes up and down.", "ar": "الصوت يعلو وينخفض."},
      {"en": "I can't see the screen", "ar": "لا أستطيع رؤية الشاشة."},
      {"en": "There is a problem with the internet connection.", "ar": "هناك مشكلة في اتصال الانترنت."},
      {"en": "I will call you back.", "ar": "سأعاود الاتصال بك."},
      {"en": "I can't see your camera.", "ar": "لا أستطيع رؤية الكاميرا الخاصة بك."},
      {"en": "The internet connection is not sta- ble.", "ar": "اتصال الانترنت غير ثابت."},
      {"en": "There is a problem with the page loading.", "ar": "توجد مشكلة في تحميل الصفحة."},
      {"en": "Let's try one more time.", "ar": "دعنا نحاول مرة أخرى."},
      {"en": "The screen is not clear/blurry.", "ar": "الشاشة غير واضحة مهتزة."},
      {"en": "There is some noise from your side.", "ar": "هناك بعض الضوضاء من جانبك."},
      {"en": "Unmute your sound, please!", "ar": "قم بإلغاء كتم الصوت لديك من فضلك"}
    ]
  },
  {
    "title": "عبارات الاستئذان والاعتذار",
    "data": [
      {"en": "Can I call five minutes later, please?", "ar": "هل يمكنني الاتصال خمس دقائق بعد الموعد."},
      {"en": "Can we start our class ten minutes earlier, please?", "ar": "هل يمكننا بدء الحصة عشر دقائق قبل الموعد."},
      {"en": "Give me one minute/second/mo- ment, please", "ar": "أعطني دقيقة ثانية لحظة من فضلك."},
      {"en": "I will not be able to attend the next class.", "ar": "لن أستطيع الحضور الحصة القادمة."},
      {"en": "I have to cancel this class.", "ar": "أنا مضطر لإلغاء هذه الحصة."},
      {"en": "I am sorry for not calling on time.", "ar": "أعتذر لعدم الاتصال في الموعد."},
      {"en": "I am sorry for this noise.", "ar": "أعتذر لهذه الضوضاء."},
      {"en": "What is the suitable time to make up the class?", "ar": "ما الوقت المناسب لتعويض الحصة؟"},
      {"en": "Let's reschedule another time. I couldn't attend, sorry for that.", "ar": "دعنا نحدد موعد آخر. لم أتمكن من الحضور معذرة."},
      {"en": "I'm sorry, I missed the connection.", "ar": "أعتذر لانقطاع الاتصال لدي."}
    ]
  },
  {
    "title": "عبارات الشكر والدعاء",
    "data": [
      {"en": "May Allah reward you!", "ar": "جزاك الله خيرا."},
      {"en": "Thank you so much!", "ar": "شكرا جزيلا لك."},
      {"en": "You are welcome!", "ar": "رد الشكر."},
      {"en": "May Allah help you!", "ar": "أعانك الله."},
      {"en": "May Allah make it easy for you!", "ar": "يسر الله لك."},
      {"en": "May Allah bless you!", "ar": "بارك الله فيك."},
      {"en": "May Allah protect you!", "ar": "حفظك الله."},
      {"en": "May Allah accept from you!", "ar": "تقبل الله منك."},
      {"en": "It's ok, No problem.", "ar": "لا عليك ليست مشكلة."},
      {"en": "Ameen, and for you too.", "ar": "آمين، وإياك"},
      {"en": "Leave you in the safety of Allah", "ar": "في أمان الله."}
    ]
  },
  {
    "title": "عبارات التشجيع والتحفيز",
    "data": [
      {"en": "Excellent!", "ar": "ممتاز !"},
      {"en": "Wonderful!", "ar": "رائع"},
      {"en": "You are much better today!", "ar": "أنت أفضل كثيرا اليوم!"},
      {"en": "Great job!", "ar": "عمل عظيم!"},
      {"en": "Well done!", "ar": "أحسنت!"},
      {"en": "Very good!", "ar": "جيد جدا!"},
      {"en": "Perfect!", "ar": "مثالي / مضبوط / متقن."},
      {"en": "You can try one more time.", "ar": "يمكنك المحاولة مرة أخرى."},
      {"en": "You will be better by practice.", "ar": "ستصبح أفضل مع التدريب / الممارسة."},
      {"en": "Your level has improved a lot.", "ar": "لقد تحسن مستواك كثيرا."},
      {"en": "Try to practice more with this.", "ar": "حاول التدرب أكثر على هذا."},
      {"en": "It will be adjusted with repetition.", "ar": "سينضبط هذا مع التكرار."},
      {"en": "Don't worry, it is a common mistake.", "ar": "لا عليك، هذا خطأ شائع."}
    ]
  },
  {
    "title": "عبارات تستخدم مع الأطفال",
    "data": [
      {"en": "Excellent! You are a hero.", "ar": "ممتاز، أنت بطل / بطلة."},
      {"en": "Let's start, my little prince/ princess.", "ar": "هيا نبدأ يا أميري / أميرتي الصغيرة."},
      {"en": "The screen is sad, as you are not looking at it.", "ar": "الشاشة حزينة لأنك لا تنظر إليها."},
      {"en": "The screen became happy now, as you started looking at it.", "ar": "الشاشة أصبحت سعيدة الآن، لأنك تنظر إليها."},
      {"en": "Let's play a game.", "ar": "هيا نلعب لعبة."},
      {"en": "You deserve a big star.", "ar": "تستحق نجمة كبيرة."},
      {"en": "You will be my teacher now.", "ar": "ستكون أنت أستاذي الآن."},
      {"en": "You are the winner today.", "ar": "أنت الفائز اليوم."},
      {"en": "Which game do you prefer to play today?", "ar": "أي لعبة تحب أن نلعبها اليوم"},
      {"en": "You are my best student.", "ar": "أنت طالبي المفضل."},
      {"en": "Ma shaa Allah! You are a fast learner.", "ar": "ما شاء الله، أنت سريع التعلم."},
      {"en": "I am so proud of you.", "ar": "أنا فخور بك جدا."},
      {"en": "You can do it, I trust you.", "ar": "يمكنك فعلها، أنا أثق بك."},
      {"en": "Let's try one more time.", "ar": "دعنا نحاول مرة أخرى."}
    ]
  },
  {
    "title": "عبارات الاتفاقات المادية",
    "data": [
      {"en": "The first trial class is for free.", "ar": "الحصة التجريبية الأولى مجانية."},
      {"en": "You can try two classes for free.", "ar": "يمكنك تجربة حصتين مجانا."},
      {"en": "You should book the classes at first before we start.", "ar": "يجب حجز الحصص أولا قبل البدء."},
      {"en": "The price of one class is (...) dollars per hour.", "ar": "سعر الحصة الواحدة (...) دولار للساعة."},
      {"en": "You can send the money via... I have an account in...", "ar": "يمكنك ارسال النقود عن طريق .... لدي حساب في..."},
      {"en": "If you book (...) classes, I will offer you a discount.", "ar": "إذا قمت بحجز عدد (...) حصص سيكون هناك خصم."},
      {"en": "The money will be refunded to you.", "ar": "سيتم إعادة إرسال النقود إليك."},
      {"en": "The money has been refunded to you.", "ar": "تم إعادة إرسال النقود لك."},
      {"en": "I have received the money, thank you.", "ar": "لقد استلمت النقود، شكرا لك."},
      {"en": "I will give you two classes for free as a reward.", "ar": "سأعطيك حصتين مجانيتين مكافأة لك."},
      {"en": "The class duration will be 30\\45 minutes.", "ar": "ستكون مدة الحصة ثلاثون / خمسة وأربعين دقيقة."},
      {"en": "Confirm the class on the website, please!", "ar": "قم بتأكيد الحصة على الموقع من فضلك."},
      {"en": "The class hasn't been confirmed yet.", "ar": "لم يتم تأكيد الحصة حتى الآن."},
      {"en": "Do you have a problem with changing the price of the class from... to...?", "ar": "هل لديك مشكلة في تغيير سعر الحصة من...إلى...؟"},
      {"en": "I have changed the price of the class.", "ar": "لقد قمت بتغيير سعر الحصة."},
      {"en": "It is not allowed to transfer money via... in my country.", "ar": "غير مسموح بتحويل الأموال عن طريق... في بلدي."},
      {"en": "The account hasn't been activated yet.", "ar": "لم يتم تفعيل الحساب بعد."},
      {"en": "I don't have an account in...", "ar": "ليس لدي حساب في..."},
      {"en": "There is (...)% transfer fees.", "ar": "يوجد (...)% رسوم تحويل."},
      {"en": "There are no more booked classes, You can book a new package.", "ar": "لم يعد هناك حصص محجوزة، يمكنك حجز باقة جديدة."}
    ]
  },
  {
    "title": "عبارات جدولة المواعيد وفروق التوقيت",
    "data": [
      {"en": "What is your time now?", "ar": "كم الساعة لديك الآن؟"},
      {"en": "There are three hours timing difference between the two countries.", "ar": "هناك ثلاث ساعات فرق توقيت بين البلدين."},
      {"en": "We will start the class at 7 pm my time/your time.", "ar": "سنبدأ الحصة الساعة السابعة مساء توقيت بلدي/توقيت بلدك."},
      {"en": "My 4 pm is your 2 pm.", "ar": "الساعة الرابعة مساء عندي توافق الساعة الثانية مساء عندك."},
      {"en": "One class daily throughout the week apart from Friday.", "ar": "حصة واحدة يوميا طوال الأسبوع ما عدا يوم الجمعة."},
      {"en": "One class twice weekly.", "ar": "حصة واحدة مرتان أسبوعيا."},
      {"en": "Three classes weekly/per week.", "ar": "ثلاث حصص أسبوعيا."},
      {"en": "I will reschedule this class.", "ar": "سأقوم بإعادة جدولة هذه الحصة."},
      {"en": "We will take the class on Thursday instead of Wednesday.", "ar": "سنأخذ الحصة يوم الخميس بدلا من الأربعاء."},
      {"en": "Do you mean 8 am my time or your time?", "ar": "هل تقصد الساعة الثامنة صباحا بتوقيت بلدي أم بلدك؟"},
      {"en": "I will call you at 5 pm your time.", "ar": "سأتصل بك الساعة الخامسة مساء بتوقيت بلدك."},
      {"en": "The daylight saving time (Summer timing) will start tomorrow.", "ar": "سيبدأ التوقيت الصيفي غدا."},
      {"en": "The standard time (Winter timing) will start after one week.", "ar": "سيبدأ التوقيت الشتوي بعد أسبوع."}
    ]
  },
  {
    "title": "اختصارات مهمة يستخدمها الطالب",
    "data": [
      {"en": "AA (AOA) (ASA). Assalamu Alikom", "ar": "السلام عليكم."},
      {"en": "WA WB. WA rahmatullah WBrakatuh", "ar": "ورحمة الله وبركاته."},
      {"en": "IA. In shaa Allah", "ar": "إن شاء الله."},
      {"en": "JAK. Jazak Allah khyran", "ar": "جزاك الله خيرا"},
      {"en": "PBUH. Peace Be Upon Him", "ar": "صلى الله عليه وسلم."},
      {"en": "PLS/PLZ! Please", "ar": "من فضلك."},
      {"en": "OMG! Oh My God", "ar": "للاندهاش..."},
      {"en": "ASAP. As Soon As Possible", "ar": "في أقرب وقت ممكن."},
      {"en": "COS/COZ… Because", "ar": "لأن..."},
      {"en": "THX. Thanks", "ar": "شكرا..."},
      {"en": "UW. You are welcome", "ar": "رد الشكر"},
      {"en": "SYS. See You Soon", "ar": "أراك قريبا."},
      {"en": "LOL. Lough Of Loud", "ar": "أضحك بشدة."},
      {"en": "PC. Personal Computer", "ar": "الحاسوب الشخصي."},
      {"en": "MSG. Message", "ar": "رسالة."},
      {"en": "DST. Daylight Saving Time", "ar": "التوقيت الصيفي."},
      {"en": "ST. Standard Time", "ar": "التوقيت الشتوي."},
      {"en": "USD. United States Dollar", "ar": "دولار أمريكي."},
      {"en": "CAD. Canadian Dollar", "ar": "دولار كندي."},
      {"en": "GBP / £ . Pound Sterling", "ar": "جنيه إسترليني."},
      {"en": "GMT. Greenwich Mean Time", "ar": "توقيت جرينتش."},
      {"en": "KSA. Kingdom of Saudi Arabia", "ar": "توقيت السعودية."},
      {"en": "EST. Eastern Standard Time", "ar": "توقيت شرق الولايات المتحدة الأمريكية."}
    ]
  },
  {
    "title": "عبارات المناسبات الخاصة والمواسم",
    "data": [
      {"en": "Ramadan Mubarak, May Allah bless you!", "ar": "رمضان مبارك، كل عام أنت بخير."},
      {"en": "May Allah accept your all good deeds.", "ar": "تقبل الله منك صالح العمل."},
      {"en": "Eid Mubarak / Happy Eid", "ar": "عيد مبارك."},
      {"en": "Congratulations for completing the whole Quran memorizing.", "ar": "تهنئة ختم حفظ القرآن."},
      {"en": "Congratulations for completing the whole Quran reciting.", "ar": "تهنئة ختم تلاوة القرآن."},
      {"en": "Congratulations on your success, I am so happy for you.", "ar": "تهنئة النجاح."},
      {"en": "Congratulations on your engagement", "ar": "تهنئة الخطبة."},
      {"en": "Happy and blessed marriage/ wedding.", "ar": "تهنئة الزواج."},
      {"en": "Congrats on the new baby, May Allah protect him/her.", "ar": "تهنئة المولود."},
      {"en": "Congratulations on your graduation.", "ar": "تهنئة التخرج."},
      {"en": "Congratulations! May Allah Accept your Haj/Omrah and all your good deeds.", "ar": "تهنئة الحج/العمرة."},
      {"en": "Welcome back, Alhamdulillah for arriving safely.", "ar": "عند العودة من سفر."},
      {"en": "Wish you a happy holiday.", "ar": "إجازة سعيدة."},
      {"en": "Congratulations on the new job.", "ar": "تهنئة بالوظيفة الجديدة."},
      {"en": "Alhamdulillah for your safety.", "ar": "تهنئة الشفاء."},
      {"en": "May Allah heal you and make you feel better soon!", "ar": "الدعاء للمريض."},
      {"en": "Take a good care of yourself.", "ar": "اعتني بنفسك جيدا."},
      {"en": "I will keep you in my prayers.", "ar": "سأذكرك في دعائي."},
      {"en": "I am sorry to hear about your loss.", "ar": "للتعزية."},
      {"en": "May Allah have mercy on him/her and give him/her", "ar": "للدعاء للميت."}
    ]
  },
  {
    "title": "عبارات التقارير الدورية الموجهة لولي الأمر",
    "data": [
      {"en": "\"student name\" has practiced in today`s class on ...", "ar": "تم تدريب الطالب في حصة اليوم على..."},
      {"en": "\"Student name\" has recited\\ memorized surat...", "ar": "قام الطالب بتلاوة/حفظ سورة..."},
      {"en": "Please! \"Student name\" needs to practice more on…", "ar": "أرجو تدريب الطالب أكثر على..."},
      {"en": "The recitation of surat… from verse no. () to verse no. () was corrected.", "ar": "تم تصحيح تلاوة سورة... من الآية () إلى الآية ()"},
      {"en": "\"Student name\" has read page no. () of Noor al bayan\\Nouraniah\\FatH al Rahman book.", "ar": "قام الطالب بقراءة صفحة رقم () من كتاب نور البيان/القاعدة النورانية/فتح الرحمن."},
      {"en": "Today, we talked about how to perform Ablution\\ daily prayers.", "ar": "تحدثنا اليوم عن كيفية الوضوء/الصلاة."},
      {"en": "Student`s level today is Good\\ Very good\\ Excellent.", "ar": "مستوى الطالب اليوم جيد/جيد جدا/ممتاز."},
      {"en": "\"Student name\" attended the class ten minutes late.", "ar": "حضر الطالب إلى الحصة متأخرا عشر دقائق."},
      {"en": "\"Student name\" didn’t attend\\(show up for the class today.", "ar": "لم يحضر الطالب إلى الحصة اليوم."}
    ]
  },
  {
    "title": "عبارات إنهاء الحصة",
    "data": [
      {"en": "Our class time has ended, See you next class in shaa Allah.", "ar": "انتهى وقت الحصة، أراك الحصة القادمة إن شاء الله."},
      {"en": "I really enjoyed my class with you.", "ar": "لقد استمتعت حقا بالحصة معك."},
      {"en": "I have to leave now, See you soon.", "ar": "يجب أن أغادر الآن، أراك قريبا."},
      {"en": "See you next Saturday at our regular\\ usual time.", "ar": "أراك السبت القادم في موعدنا المعتاد."},
      {"en": "That is enough today, Let`s resume next class.", "ar": "هذا يكفي اليوم، نستكمل الحصة القادمة."},
      {"en": "I will be waiting for next Thursday to meet you.", "ar": "سأكون في انتظار لقائك الخميس القادم."},
      {"en": "Kindly practice very well untill we meet each other next time.", "ar": "تدرب جيدا حتى نلتقي المرة القادمة."},
      {"en": "I will text you about the time of next class.", "ar": "سأرسل لك بخصوص موعد الحصة القادمة."}
    ]
  },
  {
    "title": "تصحيح الأخطاء الشائعة في حصة القرائية: أصوات وأشكال الحروف",
    "data": [
      {"en": "The letter (Noon) has one dot on the top, and (Baa) letter has one dot in the bottom.", "ar": "حرف النون لديه نقطة في الأعلى، والباء نقطته في الأسفل."},
      {"en": "The letter (Fa) has one dot on the top, and (Meem) letter has no dots.", "ar": "حرف الفاء لديه نقطة في الأعلى، والميم بدون نقاط."},
      {"en": "This is a light (Ta) letter, Not heavy (Ta).", "ar": "هذه تاء مرققة وليست طاء مفخمة."},
      {"en": "This letter is (Noon) not (Thal), (Thal) cannot be connected to the following letter.", "ar": "هذه نون وليست ذال، الذال لا تتصل بما بعدها."},
      {"en": "This letter is (Ya) not (Ba), We have two dots not only one.", "ar": "هذه ياء وليست باء، لدينا نقطتان."},
      {"en": "This letter is (Laam) not (Alif), (Alif) cannot be connected to the next letter.", "ar": "هذا الحرف لام وليس ألف، الألف لا تتصل بما بعدها."},
      {"en": "This is another form\\shape of the letter (Meem) in the middle of the word.", "ar": "هذا شكل آخر لحرف الميم في وسط الكلمة."},
      {"en": "This is the letter`s (Kaaf) shape in the beginning of the word.", "ar": "هذا هو شكل حرف الكاف في أول الكلمة."},
      {"en": "This letter is (Zai) not (Thal), Don`t put your tongue towards outside.", "ar": "هذه زاي وليست ذال، لا تخرج طرف لسانك."},
      {"en": "Pronounce it like ... letter in your language.", "ar": "انطقه كما تنطق حرف ال... في لغتك."},
      {"en": "(Tha) letter has only one edge\\tooth, and (Sheen) letter has three edges\\teeth.", "ar": "الثاء لديها حافة واحدة، الشين لديها ثلاث حواف."}
    ]
  },
  {
    "title": "الحركات القصيرة والطويلة",
    "data": [
      {"en": "Pronounce the letter with clear\\pure fatHa\\kasrah\\damma.", "ar": "قم بفتح/كسر/ضم الحرف جيدا."},
      {"en": "Do not stretch your sound, it is a short vowel.", "ar": "لا تمد صوتك، هذه حركة قصيرة."},
      {"en": "Stretch it a little bit, we have natural madd.", "ar": "قم بإطالة الصوت فيها قليلا، لدينا مدا طبيعيا"},
      {"en": "Round\\Circle your two lips properly.", "ar": "قم بضم شفتيك جيدا."},
      {"en": "This non-voweled alif) is just a helper to make the (fatHa) sound longer, Don`t pronounce it.", "ar": "هذه الألف العارية عن الحركات فقط لإطالة صوت الفتحة، لا تنطقها."},
      {"en": "Don`t pronounce this (waw), just stretch the (Dammah) sound a little bit.", "ar": "لا تنطق هذه الواو، فقط أطل صوت الضمة."},
      {"en": "This (Yaa) shouldn`t be pronounced, It just helps the (kasrah) to be longer.", "ar": "هذه الياء لا تنطق، فقط تساعد الكسرة ليكون صوتها أطول."}
    ]
  },
  {
    "title": "السكون والتنوين",
    "data": [
      {"en": "Don`t produce any movements, this sakin letter should be stable.", "ar": "لا تنتج أي حركة، هذا حرف ساكن غير متحرك."},
      {"en": "This letter should be pronounced with some shaking\\ vibration in case of sukoon.", "ar": "يجب قلقلة هذا الحرف في حالة السكون. أي عمل بعض الاهتزاز أو الاضطراب في صوت نطقه."},
      {"en": "This is not a (qalqalah) letter, Don`t shake it.", "ar": "لا تحدث قلقلة عند نطق هذا الحرف، هو ليس من حروف القلقلة."},
      {"en": "Pronounce (sakinah Noon) sound at the end of tanween.", "ar": "انطق صوت نون ساكنة في نهاية التنوين."}
    ]
  },
  {
    "title": "التشديد والمدود الفرعية",
    "data": [
      {"en": "Give the proper time for (Shadda). Sakin letter + voweled one.", "ar": "أعط الزمن المناسب للشدة. حرف ساكن+ حرف متحرك."},
      {"en": "Pronounce the (Sakin) letter at first then the voweled one.", "ar": "انطق الصوت الساكن أولا ثم المتحرك."},
      {"en": "Give most complete (Ghunnah) for (Meem) and (Noon) letter in case of carrying (Shadda).", "ar": "أعط غنة أكمل ما تكون للميم/ النون المشددة."},
      {"en": "Give the time of (Shadda) within the letter not after it.", "ar": "أعط الزمن داخل الحرف المشدد وليس بعده."},
      {"en": "We have (Shaddah) followed by natural (Madd), give the proper time for each.", "ar": "لدينا تشديد بعده مدا طبيعيا، أعط لكل زمنه."},
      {"en": "We have a wave sign (~) followed by (Hamza), So stretch your sound for four movements.", "ar": "لدينا علامة موجة بعدها همزة، أعط مد زمنه أربع حركات."},
      {"en": "There is (Shadda) after the wave sign (~), stretch your sound for six counts.", "ar": "لدينا شدة بعد علامة الموجة، أعط زمن للمد ست حركات."}
    ]
  },
  {
    "title": "تصحيح الأخطاء الشائعة في حصة التجويد: أحكام النون الساكنة والتنوين",
    "data": [
      {"en": "Pronounce clear (Noon sakinah) without changing, There is a throat letter following it.", "ar": "انطق النون الساكنة واضحة بلا تغيير، يوجد بعدها حرف اظهار حلقي."},
      {"en": "Erase the sound of (Noon) and sound of (Ghunnah) before the two letters (Laam) and (Ra).", "ar": "لا تنطق نونا ساكنة ولا غنة قبل اللام والراء."},
      {"en": "Merge the sound of (Noon sakinah) into the (Yaa) letter following it with giving (Ghunnah).", "ar": "قم بإدغام صوت النون الساكنة في الياء بعدها مع الغنة."},
      {"en": "Hide the sound of (Noon sakinah) at the sound of (Faa) letter following it, with applying light (Ghunnah).", "ar": "قم بإخفاء صوت النون الساكنة عند الفاء بعدها مع غنة مرققة."},
      {"en": "Change\\Convert this (Noon sakinah) into (Meem sakinah) then hide its sound at the (Baa) letter following it.", "ar": "قم بتحويل النون الساكنة إلى ميم ثم قم بإخفاء صوت الميم عند الباء بعدها."},
      {"en": "This is a voweled (Noon) not (Noon sakinah), The voweled one has no specific rules.", "ar": "هذه نون متحركة وليست ساكنة، النون المتحركة ليس لها أحكام."},
      {"en": "We have a light (Ghunnah) here not heavy, as the letter after it is a light letter.", "ar": "الغنة هنا مرققة وليست مفخمة، لأن الحرف بعدها حرف مرقق."},
      {"en": "Raise\\Elevate the posterior part of your tongue to produce heavy sound.", "ar": "ارفع الجزء الخلفي من لسانك لتفخيم الصوت."}
    ]
  },
  {
    "title": "أحكام الميم الساكنة واللام الساكنة",
    "data": [
      {"en": "Pronounce clear (Meem sakinah) sound before the sound of (Faa) letter.", "ar": "أظهر صوت الميم الساكنة واضحا قبل الفاء."},
      {"en": "Hide the sound of (Meem sakinah) at the (Baa) letter after it.", "ar": "قم بإخفاء صوت الميم الساكنة عند الباء."},
      {"en": "It should be pronounced as one (Meem mushddah) with most complete (Ghunnah).", "ar": "هذه تنطق ميما واحدة مشددة بغنة أكمل ما يكون."},
      {"en": "Avoid merging the sound of (Laam sakinah) in the middle of the word.", "ar": "تجنب إدغام صوت اللام الساكنة في وسط الكلمة."},
      {"en": "The letter (Laam) is carrying (Sukoon) sign, Pronounce it clearly.", "ar": "اللام تحمل علامة السكون، انطقها واضحة."},
      {"en": "The letter (Laam) carries nothing, Don`t pronounce it.", "ar": "اللام لا تحمل علامات، لا تنطقها."}
    ]
  },
  {
    "title": "همزة الوصل والتقاء الساكنين",
    "data": [
      {"en": "Don`t pronounce (Hamzatul wasl) in case of continuation of reading.", "ar": "لا تنطق همزة الوصل في حالة الاستمرار في القراءة."},
      {"en": "Give (Hamzatul wasl) short (FatHat) sound before the definite article (Laam).", "ar": "انطق همزة الوصل مع حركة فتحة قصيرة عند البدء بها قبل ال التعريف."},
      {"en": "Give (Kasrah) sound at the end of this (tanween) to avoid meeting of two (sakin) letters.", "ar": "أعط صوت كسرة في نهاية التنوين لتجنب التقاء ساكنين."},
      {"en": "This small circle above the letter means that this letter is not pronounced.", "ar": "هذه الدائرة الصغيرة فوق الحرف معناها أن الحرف لا ينطق."},
      {"en": "This oval zero above (Alif) letter means that this letter is pronounced only in case of stopping on it.", "ar": "هذا الصفر البيضاوي فوق الألف معناه أن الحرف ينطق وقفا فقط."}
    ]
  },
  {
    "title": "علامات الوقف",
    "data": [
      {"en": "It is called (Sakt) which means stopping for a while without taking breath.", "ar": "س"},
      {"en": "It means that it is allowed to stop on this word and stopping is better.", "ar": "ج"},
      {"en": "It means that it is allowed to stop on this word.", "ar": "ال"},
      {"en": "It means that it is allowed to stop on this word but continuing is better.", "ar": "مـ"},
      {"en": "It means: Don`t stop on this word and start with the following word.", "ar": ""},
      {"en": "It means that you are required to stop on this word.", "ar": ""},
      {"en": "This sign indicates the ending of one quarter (Rub) of joz and starting a new one.", "ar": ""},
      {"en": "It means that you should stop on only one of these points not both of them.", "ar": ""}
    ]
  }
];

export default JSON_DATA;