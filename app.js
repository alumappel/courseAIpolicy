const formConfig = [
  {
    sectionId: "rationale",
    sectionTitle: "1. הרציונל – למה יש מדיניות AI לקורס",
    intro:
      "כאן נרצה לחדד עבורנו ועבור הסטודנטים את מה שעומד מאחורי המדיניות ואיך היא חשובה ללמידה שלהם.",
    questions: [
      {
        id: "course_goals",
        label: "מה המיומנויות והידע המרכזיים שאיתם הסטודנטים צריכים לצאת מהקורס?",
        type: "checkbox",
        required: true,
        options: [
          "ידע תיאורטי ומושגי בתחום",
          "הבנה של עקרונות מרכזיים",
          "יישום ידע במצבים מקצועיים",
          "פתרון בעיות",
          "חשיבה ביקורתית",
          "ניתוח מידע ומקורות",
          "כתיבה וניסוח מקצועי",
          "יצירה ופיתוח של תוצר עצמאי",
          "עבודה תהליכית ומחקרית",
          "עבודת צוות ושיתוף פעולה",
          "שיקול דעת אתי ומקצועי"
        ],
        allowOther: true,
        otherLabel: "אחר"
      },
      {
        id: "ai_skills",
        label: "אילו מיומנויות שימוש ב-AI רצוי שהסטודנטים ירכשו בקורס?",
        type: "checkbox",
        required: true,
        options: [
          "ניסוח פרומפטים מדויקים",
          "היכרות עם כלים ומודלים שונים והתאמתם למשימה",
          "שימוש ב-AI לסיעור מוחות ופיתוח רעיונות",
          "שימוש ב-AI להבנת מושגים ופיתוח חומרי למידה עצמית",
          "שימוש ב-AI לקבלת משוב על טיוטות",
          "שיפור ניסוח, הגהה או תרגום",
          "בדיקת אמינות של מידע שהתקבל מ-AI",
          "זיהוי טעויות, הטיות ומגבלות של הכלי",
          "תיעוד ושקיפות בשימוש בכלים"
        ],
        allowOther: true,
        otherLabel: "אחר"
      },
      {
        id: "skills_at_risk",
        label: "באילו מיומנויות שימוש ב-AI בזמן הלמידה עלול לפגוע?",
        type: "checkbox",
        required: true,
        options: [
          "הבנה עצמאית של החומר",
          "זכירה של מושגי יסוד",
          "פתרון בעיות באופן עצמאי",
          "כתיבה אישית ומקורית",
          "ניתוח מקורות ומידע",
          "פיתוח רעיונות עצמאיים",
          "שליטה בכלים מקצועיים הנלמדים בקורס",
          "לקיחת אחריות על תהליך הלמידה"
        ],
        allowOther: true,
        otherLabel: "אחר"
      }
    ]
  },
  {
    sectionId: "boundaries",
    sectionTitle: "2. גבולות הגזרה – מה מותר ומה אסור",
    intro:
      "בשלב זה אנחנו רוצים לנסח בצורה ברורה וחד משמעית איפה עובר הגבול בין מותר לאסור, לצד דוגמאות קונקרטיות לשימוש רצוי.",
    questions: [
      {
        id: "allowed_stages",
        label: "באילו שלבים בקורס מותר ואף מומלץ להיעזר בבינה מלאכותית?",
        type: "checkbox",
        required: true,
        options: ["שיעורים או תרגולים מסוימים", "מטלת האמצע", "מטלה מסכמת", "למידה עצמית בין המפגשים"],
        allowOther: true,
        otherLabel: "אחר"
      },
      {
        id: "boundary_level",
        label: "מהם הקווים האדומים בקורס?",
        helpText: "בחרו את הרמה המתאימה או נסחו מדיניות מותאמת אישית.",
        type: "radio",
        required: true,
        options: [
          "רמה 1: איסור מוחלט – אין לעשות שימוש ב-AI באף חלק בקורס, לרבות למידה עצמית על החומר.",
          "רמה 2: שימוש כעוזר למידה בלבד – הסבר מושגים, תרגום וסיעור מוחות, ללא שילוב תוצרי AI בעבודות להגשה.",
          "רמה 3: שילוב מבוקר – מותר להשתמש לעריכה לשונית, איסוף מידע והפקת חלקי תוצרים תוך דיווח וביקורת.",
          "רמה 4: שימוש חופשי ואף חובה – מומלץ לבצע שימוש נרחב ב-AI בקורס תוך דיווח, ביקורת ושיקול דעת."
        ],
        allowOther: true,
        otherLabel: "אני רוצה להגדיר לבד"
      },
      {
        id: "recommended_ai",
        label: "אילו כלים או שימושים מומלצים ללמידה בקורס?",
        helpText: "מומלץ לבחור 2–3 דוגמאות לפחות. אפשר לבחור מכל צד כמה פריטים שרוצים.",
        type: "dual-checkbox",
        required: true,
        groups: [
          {
            id: "recommended_uses",
            title: "שימושים",
            options: [
              "שאלות הבהרה על מושגים מתוך חומרי הקורס",
              "יצירת דוגמאות לתרגול",
              "יצירת חומרי עזר ללמידה",
              "סיעור מוחות ראשוני",
              "קבלת משוב על טיוטה",
              "שיפור ניסוח ועריכה לשונית",
              "תרגום וסיוע בשפה",
              "בניית תוכנית עבודה או חלוקת משימה לשלבים",
              "סימולציה של שיחה, ראיון או הצגת רעיון",
              "בדיקת קוד, חישוב או לוגיקה",
              "השוואה בין רעיונות או פתרונות",
              "יצירת קוד, תמונה, טקסט, אודיו או וידאו"
            ],
            allowOther: true,
            otherLabel: "אחר"
          },
          {
            id: "recommended_tools",
            title: "כלים",
            options: [
              "ChatGPT",
              "Claude",
              "Google Gemini",
              "Perplexity",
              "NotebookLM",
              "Elicit",
              "Consensus",
              "Canva AI",
              "Adobe AI",
              "Gamma",
              "Beautiful.ai",
              "GitHub Copilot",
              "Cursor",
              "Claude Code",
              "Codex"
            ],
            allowOther: true,
            otherLabel: "אחר"
          }
        ]
      }
    ]
  },
  {
    sectionId: "responsibility",
    sectionTitle: "3. אחריות הסטודנט",
    intro:
      "חשוב לנו להסביר בצורה ברורה לסטודנטים את תחומי האחריות שלהם, במיוחד בתקופה שבה אמינות המידע והפער בין אדם למכונה מטשטשים.",
    questions: [
      {
        id: "student_responsibility",
        label: "מה אחריות הסטודנט על התוצרים שהוא יוצר מבחינתכם?",
        type: "radio",
        required: true,
        options: [
          "נוסח מוצע: על הסטודנט או הסטודנטית חלה האחריות המלאה על התוצרים המוגשים במסגרת הקורס. עליו או עליה לוודא את מהימנות המידע, לשים לב להטיות ולהזיות, לוודא את עמידת התוצר בדרישות המטלה ולשמור על כללי אתיקה, זכויות יוצרים ופרטיות. השימוש ב-AI לא פוטר מאחריות אישית ואקדמית."
        ],
        allowOther: true,
        otherLabel: "כתיבה חופשית"
      },
      {
        id: "verification_level",
        label: "כיצד ולאיזו רמה נדרש הסטודנט לוודא את אמינות ונכונות המידע שקיבל מ-AI?",
        type: "radio",
        required: true,
        options: [
          "רמה 1: בדיקה מול חומרי הקורס",
          "רמה 2: בדיקה מול מגוון מקורות דיגיטליים שאינם בהכרח אקדמיים",
          "רמה 3: בדיקה מול מספר מקורות אקדמיים ואתרים של גופים רשמיים, כולל תיעוד המקורות"
        ]
      },
      {
        id: "privacy_warnings",
        label: "האם יש אזהרה שחשוב לתת לסטודנטים לגבי פרטיות ואבטחת מידע?",
        type: "checkbox",
        required: true,
        helpText:
          "השאלה מיועדת במיוחד לקורסים פרויקטליים, לקוחות חיצוניים, בריאות, טיפול, משפט או כל הקשר שבו עלול להיות מידע רגיש.",
        options: [
          "אין להזין לכלי AI מידע רגיש, חסוי או מזהה של סטודנטים או של אנשים אחרים.",
          "אין להעלות חומרים פנימיים של ארגונים, מוסדות או לקוחות.",
          "אין להעלות נתונים רפואיים, טיפוליים או משפטיים."
        ],
        allowOther: true,
        otherLabel: "אחר"
      }
    ]
  },
  {
    sectionId: "transparency",
    sectionTitle: "4. שקיפות וחובת דיווח",
    intro:
      "שקיפות בשימוש ב-AI מחזקת חשיבה ביקורתית ואחריות אישית. לכן חשוב לתאם ציפיות מראש לגבי אופן הדיווח לאורך תהליך העבודה.",
    questions: [
      {
        id: "reporting_scope",
        label: "מה היקף או רזולוציית הדיווח הרצויה מבחינתכם?",
        type: "checkbox",
        required: true,
        options: [
          "שם הכלי",
          "מטרת השימוש",
          "פרומפט מרכזי מהשיחה",
          "תיעוד שיחה מלא או לינק לשיחה",
          "השלב במטלה או בקורס שבו נעשה השימוש",
          "תהליך בדיקת האמינות שנעשה",
          "רפלקציה על השימוש"
        ],
        allowOther: true,
        otherLabel: "אחר"
      },
      {
        id: "reporting_format",
        label: "מהי צורת הדיווח הרצויה?",
        type: "radio",
        required: true,
        options: ["תבנית הצהרת שימוש AI במטלות", "קישור לתבנית שלכם"]
      },
      {
        id: "reporting_format_link",
        label: "אם בחרתם בתבנית שלכם, אפשר להוסיף כאן קישור",
        type: "text",
        required: false,
        placeholder: "הדביקו כאן קישור למסמך שיתופי או לטופס"
      },
      {
        id: "reporting_timing",
        label: "באילו מועדים או משימות הסטודנט נדרש לדווח על שימוש ב-AI?",
        type: "checkbox",
        required: true,
        options: ["בכל מטלה שבה נעשה שימוש ב-AI", "במטלת האמצע", "במטלה מסכמת"],
        allowOther: true,
        otherLabel: "אחר"
      },
      {
        id: "citation_guidance",
        label: "כיצד על הסטודנטים להפנות ולצטט תוכן שנוצר על ידי AI?",
        type: "textarea",
        required: false,
        placeholder: "אפשר לציין כאן הנחיות ציטוט מקובלות בקורס, או הנחיה לדווח על שם הכלי, תאריך ואופי השימוש."
      },
      {
        id: "mastery_checks",
        label: "כיצד תיבדק בקיאות הסטודנטים בחומר או בעבודה?",
        type: "checkbox",
        required: true,
        options: [
          "בחינת הגנה בעל פה",
          "הצגה בכיתה",
          "הגשת קבצי ביניים לאורך תהליך העבודה",
          "בחינה ללא גישה לכלי AI"
        ],
        allowOther: true,
        otherLabel: "אחר"
      }
    ]
  },
  {
    sectionId: "enforcement",
    sectionTitle: "5. אכיפה והשלכות",
    intro:
      "אחרי שהגדרנו את גבולות הגזרה, חשוב לשקף לסטודנטים את ההשלכות של אי-עמידה בהן, תוך התאמה לנהלי המכון והפקולטה.",
    questions: [
      {
        id: "boundary_consequences",
        label: "מה ההשלכות לשימוש ב-AI מחוץ לגבולות המותרים?",
        type: "checkbox",
        required: true,
        options: ["דרישה לתיקון או להגשה חוזרת", "דרישה להשלמת הסבר או הגנה על העבודה", "הפחתת ניקוד", "פסילת רכיב מסוים במטלה"],
        allowOther: true,
        otherLabel: "אחר"
      },
      {
        id: "reporting_consequences",
        label: "מה ההשלכות לאי-דיווח על שימוש ב-AI?",
        type: "checkbox",
        required: true,
        options: [
          "בקשה להשלמת דיווח בדיעבד",
          "הפחתת ניקוד ברכיב השקיפות או התהליך",
          "דרישה להגשה חוזרת עם דיווח מלא",
          "בדיקת בקיאות או הגנה על העבודה בעל פה",
          "אי בדיקת העבודה"
        ],
        allowOther: true,
        otherLabel: "אחר"
      }
    ]
  },
  {
    sectionId: "equity",
    sectionTitle: "6. נקודה למחשבה: שוויון, הכללה ונגישות לטכנולוגיה",
    intro:
      "השאלות הבאות נועדו לחשיבה פדגוגית עבורכם. אין חובה לענות עליהן כדי להפיק את המדיניות, אבל הן עוזרות לוודא שהמדיניות רואה את כלל הסטודנטים.",
    callout:
      "ניתן למצוא תכנים מומלצים שתוכלו להנגיש לסטודנטים בסביבת הלמידה של המרכז, למשל חומרי הדרכה על פרומפטים, סקירת ספרות ושימוש אחראי בכלים.",
    questions: [
      {
        id: "equity_paid_tools",
        label: "האם השימושים המומלצים בקורס דורשים גישה לכלים בתשלום, ואם כן מהי החלופה ההוגנת?",
        type: "textarea",
        required: false,
        placeholder: "לדוגמה: נאפשר חלופה מבוססת כלים חינמיים או נציע מסלול ביצוע מקביל שאינו תלוי בכלי בתשלום."
      },
      {
        id: "equity_support",
        label: "אילו כלים או תמיכות אפשר להציע לסטודנטים שיש להם פערי אוריינות בכלי AI?",
        type: "textarea",
        required: false,
        placeholder: "לדוגמה: מדריך קצר, תרגול בכיתה, קישורים למשאבים, דוגמאות פרומפטים או שעות קבלה."
      }
    ]
  }
];

const state = {
  questionElements: new Map(),
  otherInputs: new Map(),
  wizardQuestions: [],
  currentQuestionIndex: 0,
  answers: {},
  skippedQuestions: new Set()
};

const formSectionsEl = document.getElementById("form-sections");
const policyForm = document.getElementById("policy-form");
const validationSummaryEl = document.getElementById("validation-summary");
const resultsSection = document.getElementById("results");
const policyOutputEl = document.getElementById("policy-output");
const studentSlideEl = document.getElementById("student-slide");
const copyStatusEl = document.getElementById("copy-status");
const builderStatusEl = document.getElementById("builder-status");
const reflectionModalEl = document.getElementById("reflectionModal");
const copyPolicyButton = document.getElementById("copy-policy");
const printPolicyButton = document.getElementById("print-policy");

let reflectionModal;

function renderForm(config) {
  formSectionsEl.innerHTML = "";

  config.forEach((section) => {
    const sectionEl = document.createElement("section");
    sectionEl.className = "form-section";
    sectionEl.id = section.sectionId;
    sectionEl.setAttribute("aria-labelledby", `${section.sectionId}-title`);

    const header = document.createElement("div");
    header.className = "form-section-header";
    header.innerHTML = `
      <h3 id="${section.sectionId}-title" class="h3">${section.sectionTitle}</h3>
      <p class="mb-0">${section.intro}</p>
    `;
    sectionEl.appendChild(header);

    if (section.callout) {
      const callout = document.createElement("div");
      callout.className = "question-callout mb-4";
      callout.innerHTML = `
        <span class="callout-icon" aria-hidden="true">i</span>
        <p class="mb-0">${section.callout}</p>
      `;
      sectionEl.appendChild(callout);
    }

    section.questions.forEach((question) => {
      sectionEl.appendChild(renderQuestion(question, section.sectionId));
    });

    formSectionsEl.appendChild(sectionEl);
  });
}

function renderQuestion(question, sectionId) {
  const wrapper = document.createElement("div");
  wrapper.className = "question-block";
  wrapper.id = `${question.id}-block`;

  const fieldset = document.createElement("fieldset");
  fieldset.className = "border-0 p-0 m-0";
  fieldset.id = `${question.id}-fieldset`;
  fieldset.tabIndex = -1;

  const legend = document.createElement("legend");
  legend.className = "question-label";
  legend.innerHTML = `
    <span>${question.label}</span>
  `;
  fieldset.appendChild(legend);

  if (question.helpText) {
    const help = document.createElement("p");
    help.className = "question-help";
    help.id = `${question.id}-help`;
    help.textContent = question.helpText;
    fieldset.appendChild(help);
    fieldset.setAttribute("aria-describedby", help.id);
  }

  let inputContainer;

  switch (question.type) {
    case "checkbox":
    case "radio":
      inputContainer = renderChoiceQuestion(question);
      break;
    case "dual-checkbox":
      inputContainer = renderDualCheckboxQuestion(question);
      break;
    case "textarea":
      inputContainer = renderTextarea(question);
      break;
    case "text":
      inputContainer = renderTextInput(question);
      break;
    default:
      inputContainer = document.createElement("div");
  }

  fieldset.appendChild(inputContainer);

  const errorEl = document.createElement("p");
  errorEl.className = "field-error";
  errorEl.id = `${question.id}-error`;
  errorEl.hidden = true;
  fieldset.appendChild(errorEl);

  wrapper.appendChild(fieldset);
  state.questionElements.set(question.id, { question, fieldset, errorEl, wrapper, sectionId });
  return wrapper;
}

function renderChoiceQuestion(question) {
  const grid = document.createElement("div");
  grid.className = "choice-grid";
  if (question.type === "radio") {
    grid.dataset.columns = "1";
  }

  const inputs = [];

  question.options.forEach((option, index) => {
    const optionId = `${question.id}-${index}`;
    const card = document.createElement("div");
    card.className = "choice-card form-check";
    card.innerHTML = `
      <input class="form-check-input" type="${question.type}" name="${question.id}" id="${optionId}" value="${option}" />
      <label class="form-check-label" for="${optionId}">
        <span class="choice-title">${option}</span>
      </label>
    `;
    inputs.push(card.querySelector("input"));
    grid.appendChild(card);
  });

  if (question.allowOther) {
    const otherId = `${question.id}-other-toggle`;
    const otherCard = document.createElement("div");
    otherCard.className = "choice-card form-check";
    otherCard.innerHTML = `
      <input class="form-check-input" type="${question.type}" name="${question.id}" id="${otherId}" value="__other__" />
      <label class="form-check-label" for="${otherId}">
        <span class="choice-title">${question.otherLabel || "אחר"}</span>
        <span class="choice-description">ניתן לנסח תשובה חופשית משלכם.</span>
      </label>
    `;
    const otherInput = document.createElement(question.type === "radio" ? "textarea" : "input");
    otherInput.className = "form-control other-input-wrap";
    otherInput.id = `${question.id}-other-text`;
    otherInput.placeholder = question.type === "radio" ? "כתבו כאן את הנוסח שלכם" : "הוסיפו תשובה חופשית";
    if (question.type !== "radio") {
      otherInput.type = "text";
    } else {
      otherInput.rows = 4;
    }
    otherInput.hidden = true;
    otherInput.setAttribute("aria-label", `${question.label} - תשובה חופשית`);
    otherCard.appendChild(otherInput);
    grid.appendChild(otherCard);

    const toggle = otherCard.querySelector("input");
    state.otherInputs.set(question.id, { toggle, input: otherInput, type: question.type });

    toggle.addEventListener("change", () => {
      syncOtherField(question.id);
      if (question.type === "radio" && toggle.checked) {
        otherInput.focus();
      }
    });

    inputs.push(toggle);
  }

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (question.allowOther) {
        syncOtherField(question.id);
      }
      clearQuestionError(question.id);
    });
  });

  return grid;
}

function renderDualCheckboxQuestion(question) {
  const wrapper = document.createElement("div");
  wrapper.className = "dual-select-grid";

  question.groups.forEach((group) => {
    const panel = document.createElement("div");
    panel.className = "mini-panel";

    const title = document.createElement("h4");
    title.className = "h5";
    title.textContent = group.title;
    panel.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "choice-grid";
    grid.dataset.columns = "1";

    group.options.forEach((option, index) => {
      const optionId = `${group.id}-${index}`;
      const card = document.createElement("div");
      card.className = "choice-card form-check";
      card.innerHTML = `
        <input class="form-check-input" type="checkbox" name="${group.id}" id="${optionId}" value="${option}" />
        <label class="form-check-label" for="${optionId}">
          <span class="choice-title">${option}</span>
        </label>
      `;
      card.querySelector("input").addEventListener("change", () => clearQuestionError(question.id));
      grid.appendChild(card);
    });

    if (group.allowOther) {
      const otherId = `${group.id}-other-toggle`;
      const otherCard = document.createElement("div");
      otherCard.className = "choice-card form-check";
      otherCard.innerHTML = `
        <input class="form-check-input" type="checkbox" name="${group.id}" id="${otherId}" value="__other__" />
        <label class="form-check-label" for="${otherId}">
          <span class="choice-title">${group.otherLabel || "אחר"}</span>
        </label>
      `;
      const otherInput = document.createElement("input");
      otherInput.type = "text";
      otherInput.className = "form-control other-input-wrap";
      otherInput.id = `${group.id}-other-text`;
      otherInput.placeholder = "הוסיפו תשובה חופשית";
      otherInput.hidden = true;
      otherInput.setAttribute("aria-label", `${group.title} - תשובה חופשית`);
      otherCard.appendChild(otherInput);
      grid.appendChild(otherCard);

      const toggle = otherCard.querySelector("input");
      state.otherInputs.set(group.id, { toggle, input: otherInput, type: "checkbox" });
      toggle.addEventListener("change", () => {
        syncOtherField(group.id);
        clearQuestionError(question.id);
      });
    }

    panel.appendChild(grid);
    wrapper.appendChild(panel);
  });

  return wrapper;
}

function renderTextarea(question) {
  const textarea = document.createElement("textarea");
  textarea.className = "form-control";
  textarea.id = question.id;
  textarea.name = question.id;
  textarea.rows = 5;
  textarea.placeholder = question.placeholder || "";
  textarea.addEventListener("input", () => clearQuestionError(question.id));
  return textarea;
}

function renderTextInput(question) {
  const input = document.createElement("input");
  input.type = "text";
  input.className = "form-control";
  input.id = question.id;
  input.name = question.id;
  input.placeholder = question.placeholder || "";
  input.addEventListener("input", () => clearQuestionError(question.id));
  return input;
}

function syncOtherField(id) {
  const entry = state.otherInputs.get(id);
  if (!entry) {
    return;
  }
  entry.input.hidden = !entry.toggle.checked;
  entry.input.toggleAttribute("required", entry.toggle.checked && entry.type === "radio");
  if (!entry.toggle.checked) {
    entry.input.value = "";
  }
}

function collectAnswers() {
  saveCurrentQuestionAnswer();
  return getAnswersSnapshot();
}

function collectChoiceValues(name, type) {
  const inputs = [...document.querySelectorAll(`[name="${name}"]`)];
  const checked = inputs.filter((input) => input.checked);
  const otherEntry = state.otherInputs.get(name);

  if (type === "radio") {
    if (!checked.length) {
      return "";
    }
    if (checked[0].value === "__other__") {
      return otherEntry?.input.value.trim() || "";
    }
    return checked[0].value;
  }

  const values = checked
    .map((input) => {
      if (input.value === "__other__") {
        return otherEntry?.input.value.trim() || "";
      }
      return input.value;
    })
    .filter(Boolean);

  return values;
}

function validateAnswers(answers) {
  const missing = [];

  formConfig.forEach((section) => {
    section.questions.forEach((question) => {
      if (!question.required) {
        return;
      }

      const value = answers[question.id];
      let isMissing = false;

      if (question.type === "checkbox") {
        isMissing = !Array.isArray(value) || value.length === 0;
      } else if (question.type === "dual-checkbox") {
        const hasValues = Object.values(value).some((groupValues) => Array.isArray(groupValues) && groupValues.length > 0);
        isMissing = !hasValues;
      } else {
        isMissing = !value || (typeof value === "string" && !value.trim());
      }

      if (isMissing) {
        missing.push({
          id: question.id,
          label: question.label
        });
      }
    });
  });

  return missing;
}

function renderValidationSummary(errors) {
  if (!errors.length) {
    validationSummaryEl.hidden = true;
    validationSummaryEl.innerHTML = "";
    return;
  }

  validationSummaryEl.hidden = false;
  validationSummaryEl.innerHTML = `
    <h3 class="h5 mb-3">שימו לב, יש שאלות שלא מולאו עדיין</h3>
    <p class="mb-2">אפשר לחזור אליהן דרך הקישורים הבאים, או לאשר בהמשך שתרצו לדלג עליהן:</p>
    <ul class="mb-0">
      ${errors
        .map(
          (error) =>
            `<li><a class="summary-link" href="#${error.id}-block" data-focus-target="${error.id}-fieldset">${error.label}</a></li>`
        )
        .join("")}
    </ul>
  `;
  validationSummaryEl.focus();
}

function markQuestionError(questionId, message) {
  const entry = state.questionElements.get(questionId);
  if (!entry) {
    return;
  }

  entry.errorEl.hidden = false;
  entry.errorEl.textContent = message;
  entry.fieldset.setAttribute("aria-describedby", `${questionId}-error`);

  const fields = getQuestionFields(entry.question);
  fields.forEach((field) => field.setAttribute("aria-invalid", "true"));
}

function clearQuestionError(questionId) {
  const entry = state.questionElements.get(questionId);
  if (!entry) {
    return;
  }

  entry.errorEl.hidden = true;
  entry.errorEl.textContent = "";

  const describedBy = `${questionId}-help`;
  if (document.getElementById(describedBy)) {
    entry.fieldset.setAttribute("aria-describedby", describedBy);
  } else {
    entry.fieldset.removeAttribute("aria-describedby");
  }

  const fields = getQuestionFields(entry.question);
  fields.forEach((field) => field.removeAttribute("aria-invalid"));
}

function clearAllErrors() {
  state.questionElements.forEach((_, questionId) => clearQuestionError(questionId));
  renderValidationSummary([]);
}

function getQuestionFields(question) {
  if (question.type === "checkbox" || question.type === "radio") {
    return [...document.querySelectorAll(`[name="${question.id}"]`), ...(state.otherInputs.get(question.id) ? [state.otherInputs.get(question.id).input] : [])];
  }

  if (question.type === "dual-checkbox") {
    return question.groups.flatMap((group) => {
      const fields = [...document.querySelectorAll(`[name="${group.id}"]`)];
      const extra = state.otherInputs.get(group.id);
      return extra ? [...fields, extra.input] : fields;
    });
  }

  const el = document.getElementById(question.id);
  return el ? [el] : [];
}

function buildPolicyText(answers) {
  const goals = formatList(answers.course_goals);
  const aiSkills = formatList(answers.ai_skills);
  const risks = formatList(answers.skills_at_risk);
  const allowedStages = formatList(answers.allowed_stages);
  const recommendedUses = formatList(answers.recommended_ai.recommended_uses);
  const recommendedTools = formatList(answers.recommended_ai.recommended_tools);
  const privacyWarnings = formatList(answers.privacy_warnings);
  const reportingScope = formatList(answers.reporting_scope);
  const reportingTiming = formatList(answers.reporting_timing);
  const masteryChecks = formatList(answers.mastery_checks);
  const boundaryConsequences = formatList(answers.boundary_consequences);
  const reportingConsequences = formatList(answers.reporting_consequences);

  const reportingFormat =
    answers.reporting_format === "קישור לתבנית שלכם" && answers.reporting_format_link
      ? `קישור לתבנית הדיווח שנבחרה בקורס: ${answers.reporting_format_link}.`
      : "הדיווח יתבצע באמצעות תבנית הצהרת שימוש AI במטלות.";

  const citationText = answers.citation_guidance
    ? `לעניין הפניה וציטוט של תוכן שנוצר על ידי AI: ${answers.citation_guidance}`
    : "במקרים שבהם נעשה שימוש בתוכן שנוצר על ידי AI, הסטודנטים יידרשו לציין במפורש את הכלי, אופי השימוש והיקפו בהתאם להנחיות המטלה.";

  const equityBlock = [answers.equity_paid_tools, answers.equity_support].filter(Boolean);

  return `מדיניות שימוש ב-AI בקורס

רציונל
מטרת המדיניות היא לשמור על הלימה בין מטרות הקורס לבין אופן השימוש בכלי AI. בקורס זה חשוב לנו במיוחד לקדם את התחומים הבאים: ${goals}. לצד זאת, אנו מעוניינים לעודד גם את המיומנויות הבאות בשימוש מושכל ב-AI: ${aiSkills}. עם זאת, חשוב לנו לצמצם פגיעה אפשרית בתחומים הבאים: ${risks}.

גבולות הגזרה
השימוש ב-AI מותר ואף מומלץ בעיקר בשלבים או בהקשרים הבאים: ${allowedStages}. הקו המנחה המרכזי בקורס הוא: ${answers.boundary_level}. דוגמאות לשימושים מומלצים בקורס: ${recommendedUses}. הכלים שאפשר לשקול לשימוש במסגרת הקורס הם: ${recommendedTools}.

אחריות הסטודנט
${answers.student_responsibility}
רמת בדיקת האמינות המצופה מהסטודנטים היא: ${answers.verification_level}. בנוסף, יש להקפיד על ההנחיות הבאות בנושאי פרטיות ואבטחת מידע: ${privacyWarnings}.

שקיפות וחובת דיווח
כאשר נעשה שימוש ב-AI, הסטודנטים נדרשים לדווח לפחות על הפרטים הבאים: ${reportingScope}. ${reportingFormat} הדיווח נדרש במצבים הבאים: ${reportingTiming}. ${citationText} בקיאות הסטודנטים בחומר ובעבודה עשויה להיבדק גם באמצעות: ${masteryChecks}.

אכיפה והשלכות
שימוש ב-AI מחוץ לגבולות המותרים עלול להוביל לאחת או יותר מההשלכות הבאות: ${boundaryConsequences}. אי-דיווח על שימוש ב-AI עלול להוביל לאחת או יותר מההשלכות הבאות: ${reportingConsequences}.
${
    equityBlock.length
      ? `
נקודות למחשבה עבור המרצה
${equityBlock.map((text) => `- ${text}`).join("\n")}`
      : ""
  }
`;
}

function buildStudentSlide(answers) {
  const boundaryLine = answers.boundary_level || "המדיניות תיקבע לפי הנחיות הקורס והמטלות.";
  const allowedStages = takeTopItems(answers.allowed_stages, 3);
  const recommendedUses = takeTopItems(answers.recommended_ai.recommended_uses, 4);
  const reportingScope = takeTopItems(answers.reporting_scope, 4);
  const consequences = takeTopItems(answers.boundary_consequences, 3);

  studentSlideEl.innerHTML = `
    <span class="slide-pill">מדיניות AI בקורס</span>
    <h3 class="display-6">מה חשוב לדעת?</h3>
    <p class="mb-0">השימוש ב-AI נועד לתמוך בלמידה, אבל אינו מחליף אחריות אישית, דיוק אקדמי ושקיפות.</p>
    <div>
      <h4 class="h5">גבולות השימוש</h4>
      <p class="mb-0">${boundaryLine}</p>
    </div>
    <div>
      <h4 class="h5">איפה אפשר להיעזר ב-AI?</h4>
      <ul>${allowedStages.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div>
      <h4 class="h5">שימושים מומלצים</h4>
      <ul>${recommendedUses.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div>
      <h4 class="h5">מה צריך לדווח?</h4>
      <ul>${reportingScope.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div>
      <h4 class="h5">אם חורגים מהמדיניות</h4>
      <ul>${consequences.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="slide-footer">
      <p class="mb-0">הסטודנטים אחראים לבדוק אמינות, לשמור על פרטיות, ולדווח על כל שימוש רלוונטי ב-AI.</p>
    </div>
  `;
}

function formatList(listValue) {
  if (!listValue || (Array.isArray(listValue) && listValue.length === 0)) {
    return "לא הוגדר בשלב זה";
  }

  if (Array.isArray(listValue)) {
    return listValue.join(", ");
  }

  return listValue;
}

function takeTopItems(listValue, limit) {
  if (!listValue) {
    return ["לפי הנחיות המרצה בקורס"];
  }

  if (Array.isArray(listValue) && listValue.length) {
    return listValue.slice(0, limit);
  }

  return [String(listValue)];
}

function scrollToResults() {
  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function copyPolicyText() {
  const text = policyOutputEl.textContent.trim();
  if (!text) {
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    copyStatusEl.textContent = "הטקסט הועתק ללוח.";
  } catch (error) {
    copyStatusEl.textContent = "לא הצלחנו להעתיק אוטומטית. אפשר לסמן ולהעתיק ידנית.";
  }
}

function handleSubmit(event) {
  event.preventDefault();
  goToNextQuestion();
}

function flattenQuestions(config) {
  return config.flatMap((section) =>
    section.questions.map((question) => ({
      ...question,
      sectionId: section.sectionId,
      sectionTitle: section.sectionTitle,
      sectionIntro: section.intro,
      sectionCallout: section.callout || ""
    }))
  );
}

function renderWizard() {
  formSectionsEl.innerHTML = `
    <div class="wizard-shell" aria-labelledby="wizard-title">
      <div class="wizard-topbar">
        <div>
          <p class="wizard-step-label" id="wizard-title">שאלה אחת בכל פעם</p>
          <p class="wizard-section-title" id="wizard-section-title"></p>
        </div>
        <p class="wizard-progress-text" id="wizard-progress-text" aria-live="polite"></p>
      </div>
      <div class="progress wizard-progress" role="progressbar" aria-labelledby="wizard-progress-text" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" id="wizard-progress-bar"></div>
      </div>
      <div id="wizard-question" class="wizard-question"></div>
      <div class="wizard-actions">
        <div class="wizard-actions-group">
          <button type="button" class="btn btn-outline-primary" id="wizard-prev">הקודם</button>
        </div>
        <div class="wizard-actions-group">
          <button type="button" class="btn btn-outline-primary" id="wizard-skip">דלג על השאלה</button>
          <button type="submit" class="btn btn-primary" id="wizard-next">הבא</button>
        </div>
      </div>
      <p class="wizard-skip-note mt-3">אפשר לדלג על שאלות פחות רלוונטיות ולחזור אליהן בהמשך.</p>
    </div>
  `;

  document.getElementById("wizard-prev").addEventListener("click", goToPreviousQuestion);
  document.getElementById("wizard-skip").addEventListener("click", skipCurrentQuestion);

  showQuestion(state.currentQuestionIndex);
}

function showQuestion(index, options = {}) {
  state.currentQuestionIndex = Math.min(Math.max(index, 0), state.wizardQuestions.length - 1);
  const question = state.wizardQuestions[state.currentQuestionIndex];
  const questionMount = document.getElementById("wizard-question");
  const sectionTitleEl = document.getElementById("wizard-section-title");

  state.questionElements.clear();
  state.otherInputs.clear();
  questionMount.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "form-section";
  wrapper.setAttribute("aria-labelledby", `${question.sectionId}-title`);
  wrapper.innerHTML = `
    <div class="form-section-header">
      <h3 id="${question.sectionId}-title" class="h4">${question.sectionTitle}</h3>
      <p class="mb-0">${question.sectionIntro}</p>
    </div>
  `;

  if (question.sectionCallout && !document.getElementById(`${question.sectionId}-callout-shown`)) {
    const callout = document.createElement("div");
    callout.className = "question-callout mb-4";
    callout.id = `${question.sectionId}-callout-shown`;
    callout.innerHTML = `
      <span class="callout-icon" aria-hidden="true">i</span>
      <p class="mb-0">${question.sectionCallout}</p>
    `;
    wrapper.appendChild(callout);
  }

  wrapper.appendChild(renderQuestion(question, question.sectionId));
  questionMount.appendChild(wrapper);
  restoreQuestionAnswer(question, state.answers[question.id]);

  sectionTitleEl.textContent = question.sectionTitle;
  updateWizardProgress();
  clearAllErrors();

  if (options.focusQuestion) {
    state.questionElements.get(question.id)?.fieldset.focus();
  }
}

function updateWizardProgress() {
  const total = state.wizardQuestions.length;
  const current = state.currentQuestionIndex + 1;
  const percent = Math.round((current / total) * 100);
  const progressText = document.getElementById("wizard-progress-text");
  const progressBar = document.getElementById("wizard-progress-bar");
  const progress = progressBar?.closest(".progress");
  const prevButton = document.getElementById("wizard-prev");
  const nextButton = document.getElementById("wizard-next");

  progressText.textContent = `שאלה ${current} מתוך ${total}`;
  progressBar.style.width = `${percent}%`;
  progress?.setAttribute("aria-valuenow", String(percent));
  prevButton.disabled = state.currentQuestionIndex === 0;
  nextButton.textContent = state.currentQuestionIndex === total - 1 ? "להפקת מדיניות" : "הבא";
}

function saveCurrentQuestionAnswer() {
  const question = state.wizardQuestions[state.currentQuestionIndex];
  if (!question) {
    return;
  }

  const answer = collectQuestionAnswer(question);
  state.answers[question.id] = answer;
  if (isQuestionAnswered(question, answer)) {
    state.skippedQuestions.delete(question.id);
  }
}

function collectQuestionAnswer(question) {
  switch (question.type) {
    case "checkbox":
      return collectChoiceValues(question.id, "checkbox");
    case "radio":
      return collectChoiceValues(question.id, "radio");
    case "dual-checkbox": {
      const answer = {};
      question.groups.forEach((group) => {
        answer[group.id] = collectChoiceValues(group.id, "checkbox");
      });
      return answer;
    }
    case "textarea":
    case "text": {
      const input = document.getElementById(question.id);
      return input ? input.value.trim() : "";
    }
    default:
      return "";
  }
}

function restoreQuestionAnswer(question, answer) {
  if (answer === undefined || answer === null) {
    return;
  }

  if (question.type === "checkbox") {
    restoreChoiceAnswer(question.id, question.options, answer, "checkbox");
  } else if (question.type === "radio") {
    restoreChoiceAnswer(question.id, question.options, answer, "radio");
  } else if (question.type === "dual-checkbox") {
    question.groups.forEach((group) => {
      restoreChoiceAnswer(group.id, group.options, answer[group.id] || [], "checkbox");
    });
  } else {
    const input = document.getElementById(question.id);
    if (input) {
      input.value = answer;
    }
  }
}

function restoreChoiceAnswer(name, options, answer, type) {
  const values = Array.isArray(answer) ? answer : [answer].filter(Boolean);
  const optionSet = new Set(options);
  const customValues = values.filter((value) => !optionSet.has(value));

  values.forEach((value) => {
    const input = [...document.querySelectorAll(`[name="${name}"]`)].find((candidate) => candidate.value === value);
    if (input) {
      input.checked = true;
    }
  });

  if (customValues.length) {
    const otherEntry = state.otherInputs.get(name);
    if (otherEntry) {
      otherEntry.toggle.checked = true;
      syncOtherField(name);
      otherEntry.input.value = type === "radio" ? customValues[0] : customValues.join(", ");
    }
  }
}

function isQuestionAnswered(question, answer) {
  if (question.type === "checkbox") {
    return Array.isArray(answer) && answer.length > 0;
  }

  if (question.type === "dual-checkbox") {
    return Object.values(answer || {}).some((groupAnswers) => Array.isArray(groupAnswers) && groupAnswers.length > 0);
  }

  return Boolean(typeof answer === "string" ? answer.trim() : answer);
}

function defaultQuestionAnswer(question) {
  if (question.type === "checkbox") {
    return [];
  }

  if (question.type === "dual-checkbox") {
    const answer = {};
    question.groups.forEach((group) => {
      answer[group.id] = [];
    });
    return answer;
  }

  return "";
}

function getAnswersSnapshot() {
  const answers = {};
  state.wizardQuestions.forEach((question) => {
    answers[question.id] = state.answers[question.id] ?? defaultQuestionAnswer(question);
  });
  return answers;
}

function validateCurrentQuestion({ allowSkip = false } = {}) {
  const question = state.wizardQuestions[state.currentQuestionIndex];
  const answer = collectQuestionAnswer(question);
  state.answers[question.id] = answer;

  if (!question.required || isQuestionAnswered(question, answer) || allowSkip || state.skippedQuestions.has(question.id)) {
    clearQuestionError(question.id);
    return true;
  }

  markQuestionError(question.id, "כדי להמשיך יש לענות על השאלה או לבחור בדילוג.");
  state.questionElements.get(question.id)?.fieldset.focus();
  return false;
}

function goToNextQuestion() {
  if (!validateCurrentQuestion()) {
    return;
  }

  if (state.currentQuestionIndex === state.wizardQuestions.length - 1) {
    finishWizard();
    return;
  }

  showQuestion(state.currentQuestionIndex + 1, { focusQuestion: true });
}

function goToPreviousQuestion() {
  saveCurrentQuestionAnswer();
  showQuestion(state.currentQuestionIndex - 1, { focusQuestion: true });
}

function skipCurrentQuestion() {
  const question = state.wizardQuestions[state.currentQuestionIndex];
  state.answers[question.id] = defaultQuestionAnswer(question);
  state.skippedQuestions.add(question.id);
  clearQuestionError(question.id);

  if (state.currentQuestionIndex === state.wizardQuestions.length - 1) {
    finishWizard({ allowCurrentSkip: true });
    return;
  }

  showQuestion(state.currentQuestionIndex + 1, { focusQuestion: true });
}

function finishWizard(options = {}) {
  clearAllErrors();
  copyStatusEl.textContent = "";

  if (!options.allowCurrentSkip && !validateCurrentQuestion()) {
    return;
  }

  const answers = collectAnswers();
  const policyText = buildPolicyText(answers);
  policyOutputEl.textContent = policyText;
  buildStudentSlide(answers);
  scrollToResults();
  builderStatusEl.textContent = "המדיניות הופקה בהצלחה.";

  if (reflectionModal) {
    reflectionModal.show();
  }
}

function setupSummaryLinks() {
  validationSummaryEl.addEventListener("click", (event) => {
    const link = event.target.closest("[data-focus-target]");
    if (!link) {
      return;
    }

    event.preventDefault();
    const block = document.getElementById(link.getAttribute("href").slice(1));
    const fieldset = document.getElementById(link.dataset.focusTarget);
    block?.scrollIntoView({ behavior: "smooth", block: "center" });
    fieldset?.focus();
  });
}

function setupGuidelineObserver() {
  const cards = document.querySelectorAll(".guideline-card");
  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => observer.observe(card));
}

function setupNavHighlight() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = [...document.querySelectorAll("#main-nav .nav-link")];

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => observer.observe(section));
}

function init() {
  state.wizardQuestions = flattenQuestions(formConfig);
  renderWizard();
  setupSummaryLinks();
  setupGuidelineObserver();
  setupNavHighlight();

  if (reflectionModalEl && window.bootstrap?.Modal) {
    reflectionModal = new window.bootstrap.Modal(reflectionModalEl);
  }

  policyForm.addEventListener("submit", handleSubmit);
  copyPolicyButton.addEventListener("click", copyPolicyText);
  printPolicyButton.addEventListener("click", () => window.print());
}

init();
