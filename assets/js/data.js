/* Hodan Hospital site content.
   GENERATED from the hospital-supplied content in the Hodan-Hospital-Website CMS (doctors, departments,
   services, leadership, packages, pages). Re-run gen-data to refresh. Photos appear only when the media
   file is marked Public + Cleared in the CMS; otherwise the page shows a placeholder. */
var HH = {
  "name": "Hodan Hospital",
  "tagline": "Quality Care, Safe Lives.",
  "phone": "+252 61 1678555",
  "tel": "+252611678555",
  "wa": "252611678555",
  "helpline": "1234",
  "email": "info@hodanhospital.com",
  "address": {
    "en": "Abudgarey Road, Hodan District, Mogadishu, Somalia",
    "so": "Waddada Abudgarey, Degmada Hodan, Muqdisho, Soomaaliya"
  },
  "footerText": "At Hodan Hospital, patient care is our highest priority. Our dedicated healthcare team is committed to providing compassionate care, exceptional hospitality and quality healthcare services.",
  "social": {
    "facebook": "https://www.facebook.com/HodanHospital/",
    "x": "https://x.com/HodanHospital",
    "instagram": "https://www.instagram.com/hodanhospital/",
    "youtube": "https://www.youtube.com/@HodanHospital"
  }
};

var GROUPS = [
  { id: 'medical', en: 'Medical', so: 'Daawaynta' },
  { id: 'surgical', en: 'Surgical', so: 'Qalliinka' },
  { id: 'women-child', en: 'Women & Children', so: 'Haweenka & Carruurta' }
];

var SPECS = [
  {
    "id": "internal-medicine",
    "group": "medical",
    "icon": "i-stetho",
    "en": "Internal Medicine",
    "so": "Daawaynta Guud",
    "den": "Comprehensive care for adult patients, focusing on disease prevention, early detection and management of chronic and complex medical conditions.",
    "oen": "",
    "sections": [
      {
        "h": "General Internal Medicine",
        "items": [
          "Comprehensive Health Assessments: full medical evaluations for hypertension, diabetes, heart disease and cancer.",
          "Preventive Care: vaccinations, health screenings and lifestyle counseling.",
          "Chronic Disease Management: hypertension, diabetes, asthma, COPD and hyperlipidemia.",
          "Acute Illness Care: infections, respiratory illnesses and gastrointestinal disorders.",
          "Multidisciplinary Care: coordination with cardiology, nephrology and endocrinology for complex cases."
        ]
      },
      {
        "h": "Gastroenterology",
        "items": [
          "Gastrointestinal Disorders: acid reflux, peptic ulcers, IBS, Crohn’s disease and celiac disease.",
          "Liver Diseases: hepatitis, cirrhosis, fatty liver disease and liver cancer."
        ]
      },
      {
        "h": "Infectious Disease",
        "items": [
          "Diagnosis and treatment of bacterial, viral, fungal and parasitic infections.",
          "HIV/AIDS care: antiretroviral therapy and monitoring of complications.",
          "Tuberculosis (TB): diagnosis, treatment and follow-up."
        ]
      },
      {
        "h": "Rheumatology & Autoimmune Disorders",
        "items": [
          "Rheumatoid arthritis and other inflammatory conditions.",
          "Lupus, scleroderma and vasculitis: long-term management and monitoring."
        ]
      },
      {
        "h": "Key Facilities",
        "items": [
          "Outpatient clinics: consultations, screenings, follow-ups and chronic disease management.",
          "Internal Medicine Inpatient Ward: acute conditions, chronic disease management and post-surgical recovery.",
          "Diagnostic Imaging: X-rays, CT scans, MRIs and ultrasound.",
          "Laboratory Services: blood tests, cultures and other diagnostic testing.",
          "Infusion Therapy Room: IV antibiotics, chemotherapy and hydration.",
          "Cardiology Suite: ECG, stress testing, echocardiography and other cardiovascular diagnostics.",
          "Pulmonary Function Lab: spirometry and diffusion capacity testing."
        ]
      },
      {
        "h": "Patient & Family Support",
        "items": [
          "Patient education on chronic diseases, test results, exercise and diet.",
          "Chronic disease management programs for diabetes, hypertension and asthma.",
          "Support groups for heart disease, diabetes and cancer.",
          "Care coordination: referrals, follow-up and outpatient services.",
          "Mental health support: counseling for anxiety, depression or stress related to illness or hospitalization."
        ]
      }
    ]
  },
  {
    "id": "obstetrics-gynecology",
    "group": "women-child",
    "icon": "i-woman",
    "en": "Obstetrics & Gynecology",
    "so": "Haweenka & Dhalmada",
    "den": "Compassionate, patient-centred care for women at every stage of life, from adolescence through menopause and beyond.",
    "oen": "",
    "sections": [
      {
        "h": "VIP Delivery Rooms",
        "items": [
        ]
      },
      {
        "h": "Obstetrics",
        "items": [
          "Prenatal Care: routine check-ups, screenings and pregnancy counseling.",
          "Labor & Delivery: vaginal and cesarean deliveries in a supportive environment.",
          "Postnatal Care: recovery monitoring, breastfeeding and maternal health support.",
          "High-Risk Obstetrics: specialized management of gestational diabetes, preeclampsia and other complications.",
          "Fertility Services: infertility counseling, diagnostic testing and specialist referrals."
        ]
      },
      {
        "h": "Gynecology",
        "items": [
          "Routine Gynecological Exams: preventive screenings, Pap smears and breast exams.",
          "Menstrual Disorders: heavy bleeding, irregular cycles and menopause-related symptoms.",
          "Contraception Counseling: birth control options and family planning guidance.",
          "Gynecological Surgery: hysterectomy, laparoscopic surgery and treatment for fibroids, endometriosis and ovarian cysts.",
          "Pelvic Health & Incontinence: pelvic floor disorders, urinary incontinence and prolapse.",
          "Women’s Health Education: sexual health, menopause and general wellness."
        ]
      },
      {
        "h": "Key Facilities",
        "items": [
          "Outpatient Clinics: routine examinations, prenatal visits and consultations.",
          "Labor & Delivery Rooms: technology supporting childbirth.",
          "Operating Theaters: gynecological surgery and cesarean sections.",
          "Ultrasound and Imaging: prenatal monitoring and gynecological diagnostics.",
          "Maternity Ward: post-delivery recovery and newborn care.",
          "Fertility Clinic: infertility diagnosis and treatment."
        ]
      },
      {
        "h": "Patient & Family Support",
        "items": [
          "Prenatal Education: childbirth, breastfeeding and newborn care.",
          "Postnatal Support: lactation consulting, maternal mental health support and baby care.",
          "Counseling Services: infertility, high-risk pregnancies and emotional or mental health challenges.",
          "Family-Centered Care: family involvement during labor, delivery and recovery."
        ]
      },
      {
        "h": "Quality Assurance and Patient Safety",
        "items": [
          "Clinical Protocols: medical guidelines and best practices.",
          "Patient Safety: infection control, safe childbirth practices and monitoring during labor and after surgery.",
          "Education and Training: ongoing professional development for staff."
        ]
      }
    ]
  },
  {
    "id": "pediatrics",
    "group": "women-child",
    "icon": "i-baby",
    "en": "Pediatrics",
    "so": "Carruurta",
    "den": "Health and well-being of infants, children and adolescents: preventive services, treatment of acute and chronic illnesses, and healthy growth and development.",
    "oen": "",
    "sections": [
      {
        "h": "Medical Services",
        "items": [
          "General Pediatrics: routine check-ups, growth monitoring, immunizations and health education.",
          "Emergency Care: urgent illnesses and injuries in children.",
          "Neonatal Care: specialized care for newborns, including premature babies and those with birth complications.",
          "Pediatric Surgery: surgical interventions, including minimally invasive techniques.",
          "Chronic Illness Management: ongoing care for asthma, diabetes, epilepsy and obesity."
        ]
      },
      {
        "h": "Specialized Clinics",
        "items": [
          "Well-Baby Clinic: routine health check-ups, vaccinations and growth monitoring for infants and young children.",
          "Endocrinology Clinic: diagnosis and treatment of hormonal disorders affecting growth, development and endocrine health."
        ]
      },
      {
        "h": "Facilities",
        "items": [
          "Outpatient Clinics: check-ups, immunizations and minor treatments.",
          "Pediatric Emergency Room: child-specific emergency care.",
          "Neonatal Intensive Care Unit (NICU): premature or critically ill newborns.",
          "Pediatric ICU: intensive care for critically ill or injured children.",
          "Play Therapy Room: a supportive space for children to ease anxiety and express emotions.",
          "Laboratory & Imaging Services: child-friendly laboratory and imaging tests."
        ]
      },
      {
        "h": "Patient & Family Support",
        "items": [
          "Parent Education: guidance on children’s health needs and appropriate home care.",
          "Family-Centered Care: family involvement in decisions and care plans.",
          "Follow-up Care: regular follow-up for chronic conditions and after hospitalization."
        ]
      }
    ]
  },
  {
    "id": "ent",
    "group": "surgical",
    "icon": "i-ear",
    "en": "ENT (Ear, Nose & Throat)",
    "so": "Dhegta, Sanka & Cunaha",
    "den": "Diagnostic, therapeutic and surgical care for ear, nose and throat conditions in patients of all ages.",
    "oen": "",
    "sections": [
      {
        "h": "General ENT Consultations & Preventive Care",
        "items": [
          "Evaluation and treatment of ear infections, nasal congestion, sore throats and voice problems, alongside education and early detection to prevent complications."
        ]
      },
      {
        "h": "Ear (Otology) Services",
        "items": [
          "Hearing Tests & Audiology: audiograms, tympanometry, hearing loss assessment and auditory rehabilitation.",
          "Ear Infections: acute and chronic otitis media, swimmer’s ear and mastoiditis.",
          "Tinnitus Management: assessment, sound therapy, counseling and hearing aids.",
          "Balance Disorders: dizziness, vertigo, vestibular testing and balance rehabilitation.",
          "Ear Surgery: myringotomy and ear tube insertion, tympanoplasty and mastoid surgery."
        ]
      },
      {
        "h": "Nose (Rhinology) Services",
        "items": [
          "Sinusitis & Allergies: sinus infections, allergic rhinitis, allergy testing and immunotherapy.",
          "Nasal Congestion & Deformities: nasal polyps, septal deviation, septoplasty and turbinoplasty.",
          "Nasal Endoscopy: examination of nasal passages and sinuses for infections, tumors and other abnormalities.",
          "Snoring & Sleep Apnea: evaluation and management, CPAP therapy, surgery and lifestyle guidance."
        ]
      },
      {
        "h": "Throat (Laryngology) Services",
        "items": [
          "Voice Disorders: hoarseness, vocal cord nodules, voice therapy and surgery.",
          "Swallowing Disorders: dysphagia assessment, speech therapy and surgical intervention where appropriate.",
          "Throat Infections & Inflammation: tonsillitis, pharyngitis, laryngitis and tonsillectomy.",
          "Laryngoscopy: examination of the voice box for tumors, inflammation and infections."
        ]
      },
      {
        "h": "Pediatric ENT Services",
        "items": [
          "Childhood ear infections and ear tube insertion for recurrent infections.",
          "Tonsil and adenoid surgery for chronic tonsillitis, enlarged adenoids or sleep apnea.",
          "Speech and hearing assessments, early intervention, speech therapy and hearing aids."
        ]
      },
      {
        "h": "Key Facilities",
        "items": [
          "ENT outpatient clinics for consultations, follow-ups and minor treatments.",
          "Audiology department for hearing assessments, hearing aid fitting and rehabilitation.",
          "Nasal endoscopy suite.",
          "Surgical operating room for ear, nose, throat and head/neck procedures.",
          "Speech and swallowing therapy facilities.",
          "Imaging center with CT, MRI and X-ray services."
        ]
      }
    ]
  },
  {
    "id": "dental",
    "group": "medical",
    "icon": "i-tooth",
    "en": "Dental",
    "so": "Ilkaha",
    "den": "Comprehensive oral healthcare: preventive, diagnostic, restorative and surgical treatments for patients of all ages.",
    "oen": "",
    "sections": [
      {
        "h": "General Dentistry",
        "items": [
          "Dental Examinations and Consultations: routine check-ups and oral health assessments.",
          "Preventive Dentistry: fluoride treatments, dental sealants and professional cleaning.",
          "Tooth Fillings: composite or amalgam restoration of decayed or damaged teeth.",
          "Gum Disease Treatment: scaling and root planing for gingivitis and periodontitis."
        ]
      },
      {
        "h": "Restorative Dentistry",
        "items": [
          "Dental Crowns and Bridges: restoration of damaged or missing teeth.",
          "Dentures: full and partial dentures.",
          "Root Canal Therapy: treatment of infected tooth pulp."
        ]
      },
      {
        "h": "Cosmetic Dentistry",
        "items": [
          "Dental Veneers: composite veneers.",
          "Orthodontic Treatments: braces and clear aligners."
        ]
      },
      {
        "h": "Oral and Maxillofacial Surgery",
        "items": [
          "Tooth Extractions, including wisdom teeth.",
          "Dental Implants: replacement of missing teeth."
        ]
      },
      {
        "h": "Pediatric Dentistry",
        "items": [
          "Preventive and restorative dental care for children.",
          "Early Orthodontic Intervention: monitoring and correcting bite issues."
        ]
      },
      {
        "h": "Emergency Dental Care",
        "items": [
          "Dental Trauma: broken or knocked-out teeth and jaw injuries.",
          "Severe Tooth Pain: emergency root canals, extractions and abscess drainage."
        ]
      },
      {
        "h": "Facilities and Equipment",
        "items": [
          "Dental chairs with built-in X-ray units and LED lighting.",
          "Digital panoramic X-ray.",
          "Ultrasonic scalers.",
          "Endodontic equipment.",
          "Sterilization unit for infection control and patient safety."
        ]
      },
      {
        "h": "Patient Care and Workflow",
        "items": [
          "Appointment and walk-in services.",
          "Multidisciplinary collaboration with ENT, maxillofacial surgeons and pediatricians.",
          "Personalized treatment plans.",
          "Patient education on oral hygiene and disease prevention."
        ]
      }
    ]
  },
  {
    "id": "neurosurgery",
    "group": "surgical",
    "icon": "i-brain",
    "en": "Neurosurgery",
    "so": "Qalliinka Maskaxda & Dareemayaasha",
    "den": "Specialized care for neurological conditions requiring surgical intervention.",
    "oen": "",
    "sections": [
      {
        "h": "Core Services",
        "items": [
          "Brain Surgery: surgical treatments for brain tumors, trauma, intracranial aneurysms and congenital abnormalities.",
          "Spinal Surgery: cervical and lumbar herniated discs, spinal stenosis, spinal tumors, spinal abscesses, vertebral fractures and spinal disorders related to infections such as tuberculosis.",
          "Trauma Surgery: emergency surgical management of traumatic brain injuries (TBI) and cervical, thoracic and lumbar spinal injuries.",
          "Pediatric Neurosurgery: surgical care for congenital malformations, brain injuries and other neurological conditions affecting children."
        ]
      },
      {
        "h": "Advanced Facilities and Equipment",
        "items": [
        ]
      },
      {
        "h": "Patient Care",
        "items": [
          "Patient-centred care from initial consultation and pre-surgical evaluation through post-operative care and rehabilitation."
        ]
      },
      {
        "h": "Collaborative Approach",
        "items": [
          "Collaboration with neurology, radiology, physical therapy and rehabilitation services."
        ]
      }
    ]
  },
  {
    "id": "cardiology",
    "group": "medical",
    "icon": "i-heart",
    "en": "Cardiology",
    "so": "Wadnaha",
    "den": "Comprehensive cardiovascular care through prevention, early detection, intervention and rehabilitation.",
    "oen": "",
    "sections": [
      {
        "h": "Clinical services",
        "items": [
          "Cardiac assessments; hypertension, diabetes, cholesterol and smoking risk management; diet, exercise and stress counseling; heart failure, arrhythmias and coronary artery disease."
        ]
      },
      {
        "h": "Diagnostics, procedures and treatment",
        "items": [
          "ECG, echocardiography, stress testing, cardiac CT/MRI, Holter monitoring (24–48 hours), angiography; angioplasty, stenting, PCI, catheter-based treatments and cardiac catheterization."
        ]
      },
      {
        "h": "Facilities and patient support",
        "items": [
          "Outpatient clinics, cath lab, cardiac imaging suite, cardiac rehabilitation, ICU and cardiac care unit. Education, support groups, lifestyle coaching, post-surgery monitoring and counseling. Guidelines, staff training and infection control."
        ]
      }
    ]
  },
  {
    "id": "general-surgery",
    "group": "surgical",
    "icon": "i-scalpel",
    "en": "General Surgery",
    "so": "Qalliinka Guud",
    "den": "Comprehensive surgical interventions tailored to patient needs.",
    "oen": "",
    "sections": [
      {
        "h": "Clinical services",
        "items": [
          "Elective hernia repair, gallbladder removal, thyroidectomy; emergency trauma and appendectomy; pediatric congenital conditions; laparoscopic surgery; endoscopic colonoscopy and gastroscopy; abdominoplasty."
        ]
      },
      {
        "h": "Diagnostics, procedures and treatment",
        "items": [
          "Pre-operative assessments, pain management, rehabilitation, follow-up, education, infection control and surgical error prevention."
        ]
      },
      {
        "h": "Facilities and patient support",
        "items": [
          "Modern operating rooms, laparoscopic and endoscopic equipment; multidisciplinary general and trauma surgical team."
        ]
      }
    ]
  },
  {
    "id": "ophthalmology",
    "group": "surgical",
    "icon": "i-eye",
    "en": "Ophthalmology",
    "so": "Indhaha",
    "den": "Accessible eye care, prevention, treatment and community education.",
    "oen": "",
    "sections": [
      {
        "h": "Clinical services",
        "items": [
          "Eye examinations and refraction; dry eyes, conjunctivitis, allergies; cataracts, glaucoma, diabetic retinopathy, pediatric amblyopia and strabismus; emergency trauma, infections and sudden vision loss."
        ]
      },
      {
        "h": "Diagnostics, procedures and treatment",
        "items": [
          "Slit lamp, tonometry, B-scan; cataract phacoemulsification, premium lenses, YAG/argon laser, chalazion removal and pterygium excision."
        ]
      },
      {
        "h": "Facilities and patient support",
        "items": [
          "Consultation rooms, autorefractors, diagnostic suite, operating theatre with microscopes and phaco equipment, waiting and recovery spaces."
        ]
      }
    ]
  },
  {
    "id": "dermatology",
    "group": "medical",
    "icon": "i-skin",
    "en": "Dermatology",
    "so": "Maqaarka",
    "den": "Medical, surgical and cosmetic care for skin, hair and nails.",
    "oen": "",
    "sections": [
      {
        "h": "Clinical services",
        "items": [
          "Eczema, psoriasis, acne, rosacea; bacterial, viral, fungal and parasitic infections; lupus, pemphigus, vitiligo; alopecia, dandruff, scalp infections; nail fungus, ingrown nails and dystrophies; pediatric birthmarks, hemangiomas, diaper rash and eczema."
        ]
      },
      {
        "h": "Diagnostics, procedures and treatment",
        "items": [
          "Laser therapy, chemical peels, microdermabrasion, microneedling, skin rejuvenation, Botox, fillers, pigmentation treatments, hair removal and transplant; patch testing, contact dermatitis, chronic urticaria and angioedema."
        ]
      }
    ]
  },
  {
    "id": "orthopedics",
    "group": "surgical",
    "icon": "i-bone",
    "en": "Orthopedics",
    "so": "Lafaha",
    "den": "Diagnosis, prevention and surgical/non-surgical treatment of musculoskeletal conditions.",
    "oen": "",
    "sections": [
      {
        "h": "Clinical services",
        "items": [
          "Consultations, fracture casting and splinting, sports medicine, arthritis and joint care, spine clinic for back and neck pain."
        ]
      },
      {
        "h": "Diagnostics, procedures and treatment",
        "items": [
          "Complex fracture/dislocation surgery, total and partial knee/hip/shoulder replacement, spine surgery, arthroscopy, pediatric orthopedics; rehabilitation, pain management and physical therapy."
        ]
      },
      {
        "h": "Facilities and patient support",
        "items": [
          "Consultation rooms, orthopedic theatre, C-arm fluoroscopy, specialized tables, plaster room, X-ray/MRI/CT, rehabilitation unit."
        ]
      }
    ]
  }
];

var DOCTORS = [
  {
    "slug": "fuad-aamir",
    "name": "Prof Dr. Fuad Aamir",
    "spec": "internal-medicine",
    "role": "Internal Medicine and Gastroenterology",
    "qual": null,
    "exp": "41 years",
    "bio": "41 years in Italy; gastroenterology, digestive endoscopy, liver disease, endocrinology; former Internal Medicine Director in Italy.",
    "photo": null
  },
  {
    "slug": "keif-kheire",
    "name": "Dr. Keif Kheire",
    "spec": "obstetrics-gynecology",
    "role": "Obstetrics & Gynecology",
    "qual": "MBBS, MMED OBGY, MPH",
    "exp": null,
    "bio": "LUMHS Pakistan; over 15 years.",
    "photo": null
  },
  {
    "slug": "mohammed-abdulkarim",
    "name": "Dr. Mohammed Abdulkarim",
    "spec": "orthopedics",
    "role": "Orthopedic & Trauma Surgery",
    "qual": "MBBS, MD",
    "exp": "28 years",
    "bio": "28 years; spine and joint replacement.",
    "photo": null
  },
  {
    "slug": "raed-salman",
    "name": "Dr. Raed Salman",
    "spec": "dental",
    "role": "Dentistry",
    "qual": null,
    "exp": "29 years",
    "bio": "Damascus University; dental implants and cosmetic dentistry, Seoul; 29 years.",
    "photo": null
  },
  {
    "slug": "ahmed-omar",
    "name": "Dr. Ahmed Omar",
    "spec": "internal-medicine",
    "role": "Neuropsychiatry & Internal Medicine",
    "qual": null,
    "exp": null,
    "bio": "Over 10 years; stroke, epilepsy, Alzheimer’s, migraines, multiple sclerosis, schizophrenia, myasthenia gravis, Parkinson disease and mood disorders.",
    "photo": null
  },
  {
    "slug": "yasir-balla",
    "name": "Dr. Yasir Balla",
    "spec": "internal-medicine",
    "role": "Internal Medicine",
    "qual": "MBBS, MD",
    "exp": "15 years",
    "bio": "15 years; University of Kassala; consultant physician, clinical fellow in gastroenterology and fitness nutrition.",
    "photo": null
  },
  {
    "slug": "mohammed-albdulmunim",
    "name": "Dr. Mohammed Albdulmunim",
    "spec": "obstetrics-gynecology",
    "role": "Obstetrics & Gynecology",
    "qual": null,
    "exp": null,
    "bio": "Pregnancy follow-up, obstetric and gynecological operations, infertility care and ultrasound.",
    "photo": null
  },
  {
    "slug": "mustafa-ali-moalim",
    "name": "Dr. Mustafa Ali Moalim",
    "spec": "pediatrics",
    "role": "Pediatrics, Hematology & Oncology",
    "qual": "MBBS, MD, PhD",
    "exp": "8 years",
    "bio": "8 years; Iranian Pediatric Board and Tehran University of Medical Sciences.",
    "photo": null
  },
  {
    "slug": "fartun-hirey",
    "name": "Dr. Fartun Hirey",
    "spec": "cardiology",
    "role": "Cardiology",
    "qual": "MBBS, MD",
    "exp": "5 years",
    "bio": "5 years; cardiac diagnosis, treatment, patient assessment and diagnostic tests.",
    "photo": null
  },
  {
    "slug": "samira-abdirahman-mohamud",
    "name": "Dr. Samira AbdiRahman Mohamud",
    "spec": "ophthalmology",
    "role": "Clinical Optometry",
    "qual": "OD, MS Clinical Optometry",
    "exp": "8 years",
    "bio": "8 years; UKM Malaysia; eye diseases and vision disorders.",
    "photo": null
  },
  {
    "slug": "zakarie-abdullahi",
    "name": "Dr. Zakarie Abdullahi (Dr. Sacdan)",
    "spec": "dermatology",
    "role": "Dermatology & Hair Transplant Surgery",
    "qual": "MBChB, MD",
    "exp": "10 years",
    "bio": "10 years; skin, hair, nails, cosmetic services and dermatosurgery.",
    "photo": null
  },
  {
    "slug": "ibrahim-hussein-ali",
    "name": "Dr. Ibrahim Hussein Ali",
    "spec": null,
    "role": "Emergency Medicine & Critical Care",
    "qual": "MBBS, MD",
    "exp": "10 years",
    "bio": "10 years; Jilin University, internship in Hyderabad, residency in Turkey; researcher and lecturer.",
    "photo": null
  },
  {
    "slug": "zahir-hassan",
    "name": "Dr. Zahir Hassan",
    "spec": null,
    "role": "ICU Specialist",
    "qual": "MBBS, MD",
    "exp": null,
    "bio": "Khartoum University; over 15 years handling accident and emergency cases.",
    "photo": null
  },
  {
    "slug": "nasteha-hersi",
    "name": "Dr. Nasteha Hersi",
    "spec": "pediatrics",
    "role": "Pediatrics",
    "qual": "MBChB, MPH, MMed",
    "exp": "12 years",
    "bio": "12 years; senior pediatric consultant and public health specialist.",
    "photo": null
  },
  {
    "slug": "mohamed-zakaria",
    "name": "Dr. Mohamed Zakaria",
    "spec": "general-surgery",
    "role": "General & Pediatric Surgery",
    "qual": "MBBS, MD",
    "exp": "15 years",
    "bio": "15 years; laparoscopic surgery, pediatric congenital anomalies and anorectal diseases.",
    "photo": null
  },
  {
    "slug": "abdulkadir-gadudow",
    "name": "Dr. Abdulkadir Gadudow",
    "spec": "pediatrics",
    "role": "Pediatrics",
    "qual": "MBBS, MD",
    "exp": "15 years",
    "bio": "15 years; child growth, development and healthcare.",
    "photo": null
  },
  {
    "slug": "mohamoud-mohamed-mohamoud",
    "name": "Dr. Mohamoud Mohamed Mohamoud",
    "spec": null,
    "role": "Urological Surgery",
    "qual": "MBBS, MD",
    "exp": null,
    "bio": "10+ years; Tehran University of Medical Sciences, Iranian Board of Urology; open surgery, uro-oncology, endourology, laser surgery, ureteroscopy, cystoscopy and andrology.",
    "photo": null
  },
  {
    "slug": "abdihakim-elmi",
    "name": "Dr. Abdihakim Elmi",
    "spec": "general-surgery",
    "role": "General & Pediatric Surgery",
    "qual": "MBBS, MSc, MD",
    "exp": "12 years",
    "bio": "12 years; Kassala University and Ain Shams University; lecturer in Mogadishu.",
    "photo": null
  },
  {
    "slug": "sefau-hawas-sherif",
    "name": "Dr. Sefau Hawas Sherif",
    "spec": "neurosurgery",
    "role": "Neurosurgery",
    "qual": "MBBS, MD",
    "exp": "12 years",
    "bio": "12 years; Addis Ababa University; disc herniation, brain and spine tumors, congenital defects and intracranial bleeding.",
    "photo": null
  },
  {
    "slug": "mohamed-mukhtar-kassim",
    "name": "Dr. Mohamed Mukhtar Kassim",
    "spec": "pediatrics",
    "role": "Pediatrics & Pediatric Cardiology",
    "qual": "MBBS, MD",
    "exp": "15 years",
    "bio": "15 years; Jilin University, clinical attachment India, pediatric training Istanbul, pediatric cardiology fellowship Ankara City Hospital.",
    "photo": null
  },
  {
    "slug": "ashraf-mohamud",
    "name": "Ashraf Mohamud",
    "spec": "orthopedics",
    "role": "Orthopedic & Trauma Surgery",
    "qual": "MBBS, MD",
    "exp": "13 years",
    "bio": "13 years; fractures, bone and joint injuries, sports injuries and musculoskeletal conditions.",
    "photo": null
  }
];

var LEADERS = [
  {
    "name": "Mr Abdiaziz Ahmed “Aabow”",
    "role": "Board Chairman",
    "bio": "",
    "message": [
      "Hodan Hospital is a private healthcare institution dedicated to excellence in medical care and innovation. With a commitment to advancing the healthcare system, the hospital integrates modern medical technologies, evidence-based practices and a patient-first approach to deliver high-quality services.",
      "Equipped with modern facilities and staffed by skilled and compassionate healthcare professionals, Hodan Hospital offers a comprehensive range of services, including general consultations, specialized treatments, surgical procedures and emergency care. The hospital prioritizes safety, efficiency and personalized treatment.",
      "Beyond patient care, Hodan Hospital contributes to healthcare sector development through continuous medical education, research initiatives and professional training programs. By embracing innovation and fostering collaboration, the hospital strives to improve healthcare accessibility and community well-being.",
      "Hodan Hospital remains committed to shaping the future of healthcare by combining expertise, technology and a vision for sustainable development in the medical field."
    ],
    "photo": null
  },
  {
    "name": "Dr. Mohamed Issak Omar",
    "role": "Founder & CEO",
    "bio": "Medical doctor; MBBS, Kassala University, Sudan (2012); Diploma in Health Service Management, Sudan University. Over 10 years in hospital management and health services. Former founder and CEO of Somali Sudanese Specialized Hospital; co-founder and shareholder of Zazi Hospitals, Nairobi; business affiliation with Issak Pharmaceutical Company, founded in 2017.",
    "message": [],
    "photo": null
  },
  {
    "name": "Dr. Keif Kheire",
    "role": "Deputy Director",
    "bio": "Former CEO of Dr. Osman Fiqi Hospital for a decade and Medical Director of Shifa Hospital. Over 15 years in obstetrics and gynecology; LUMHS Pakistan graduate; MPH, Kampala University.",
    "message": [],
    "photo": null
  },
  {
    "name": "Dr. Abdulkadir Sh. Omar “Gadudow”",
    "role": "Medical Director",
    "bio": "Pediatrician with experience in clinical leadership, healthcare management, patient care and medical administration; focuses on quality, clinical operations and patient safety.",
    "message": [],
    "photo": null
  },
  {
    "name": "Jibril Hussein Amalow",
    "role": "Procurement and Logistics Manager",
    "bio": "Experienced in supply chain management, strategic sourcing, inventory control, healthcare procurement, vendor relationships and logistics. Focuses on cost optimization and timely medical supplies.",
    "message": [],
    "photo": null
  },
  {
    "name": "Abdirizak Salad",
    "role": "Head of Pharmacy",
    "bio": "Over six years at Somali Sudanese Hospital; degree in Public Administration from University of Somalia and Diploma in Pharmacology from Salam University. Technical and management training.",
    "message": [],
    "photo": null
  },
  {
    "name": "Omar Mohamed",
    "role": "Nursing Director",
    "bio": "Over 15 years in patient care and nursing administration; worked with MSF and SOS Children’s Village. Bachelor’s degrees in Nursing and Public Administration; other hospital management qualifications.",
    "message": [],
    "photo": null
  },
  {
    "name": "Abdalla Dahir Hassan",
    "role": "Chief Financial Officer (CFO)",
    "bio": "Master’s degree in Economics and Finance from Istanbul University. Experience in financial leadership, strategic growth, operational efficiency, healthcare, supply chains and work with UN agencies.",
    "message": [],
    "photo": null
  },
  {
    "name": "Mahad Said",
    "role": "Operations Manager",
    "bio": "Experience in financial planning, budgeting, strategic financial management, accounting and financial analysis; financial process optimization, risk, compliance, team leadership and cost efficiency.",
    "message": [],
    "photo": null
  },
  {
    "name": "Abdikadir Baryare",
    "role": "HR Manager",
    "bio": "Over 10 years in management across institutions and positions; MBA, Mount Kenya University.",
    "message": [],
    "photo": null
  },
  {
    "name": "Dr. Mohamed Dahir Salad (Dr. Heydar)",
    "role": "Quality Control Director",
    "bio": "Internal Medicine physician and healthcare quality professional with over 10 years in Somalia’s healthcare system; clinical practice, quality control, research, education and professional training. Focuses on evidence-based practice, patient safety, clinical documentation, compliance and continuous improvement.",
    "message": [],
    "photo": null
  }
];

var SERVICES = [
  {
    "id": "centers",
    "en": "Centres",
    "so": "Xarumo",
    "items": [
          "Pain and Headache Management",
      "Musculoskeletal Health",
      "Dermatology"
    ]
  },
  {
    "id": "outpatient",
    "en": "Outpatient clinics",
    "so": "Kiliinikada bukaan-socodka",
    "items": [
          "Oral Health and Dentistry Clinic",
      "Ophthalmology & Ophthalmic Surgery",
      "Ear, Nose & Throat Clinic",
      "Cardiology",
      "Gastroenterology",
      "Internal Medicine",
      "Neurology & Neurosurgery",
      "Urology",
      "General Surgery",
      "Nutrition",
      "Executive Clinics"
    ]
  },
  {
    "id": "inpatient",
    "en": "Inpatient & critical care",
    "so": "Bukaan-jiifka & daryeelka degdegga",
    "items": [
          "ICU, NICU and Nursery",
      "Operation & Anesthesia Unit"
    ]
  },
  {
    "id": "other",
    "en": "Hospital departments",
    "so": "Qaybaha isbitaalka",
    "items": [
          "Laboratory Department",
      "Medical Imaging Department",
      "Pharmacy Services Department",
      "Emergency Room"
    ]
  },
  {
    "id": "diagnostics",
    "en": "Diagnostic tests",
    "so": "Baaritaannada",
    "items": [
          "X-rays",
      "CT scans",
      "MRI scans",
      "Ultrasound",
      "Biopsy",
      "Endoscopy",
      "Electrocardiogram (ECG)",
      "Electroencephalogram (EEG)",
      "Blood tests",
      "Hearing tests",
      "Eye tests",
      "Vital signs monitoring"
    ]
  }
];

var PACKAGES = [
  {
    "id": "executive-health-package-men",
    "icon": "i-users",
    "en": "Executive Health Package Men",
    "aud": "men",
    "tests": [
      "Consultation with Internal Medicine",
      "Consultation with Specialist Cardiologist",
      "X-ray (chest)",
      "Ultrasound (pelvis)",
      "Stool occult blood test",
      "Vitamin profile",
      "Blood pressure monitoring",
      "Thyroid profile",
      "ECHO",
      "Lipid profile",
      "Diabetic screening",
      "Liver profile",
      "Gamma-glutamyl transferase",
      "Rheumatology profile",
      "Renal profile",
      "PSA test",
      "Pancreas profile",
      "Testosterone",
      "CPK – serum",
      "Urine routine"
    ]
  },
  {
    "id": "comprehensive-health-package-women",
    "icon": "i-woman",
    "en": "Comprehensive Health Package Women",
    "aud": "women",
    "tests": [
      "Consultation with Internal Medicine",
      "Blood pressure monitoring",
      "Vitamin profile",
      "Thyroid profile",
      "Diabetic screening",
      "Iron profile",
      "Gamma-glutamyl transferase",
      "Rheumatology profile",
      "Liver profile",
      "Lipid profile",
      "Renal profile",
      "Pancreas profile",
      "Complete hemogram",
      "Prolactin",
      "CPK – serum",
      "Follicle stimulating hormone (FSH)",
      "Urine routine",
      "Luteinizing hormone"
    ]
  },
  {
    "id": "executive-health-package-women",
    "icon": "i-woman",
    "en": "Executive Health Package Women",
    "aud": "women",
    "tests": [
      "Consultation with Internal Medicine",
      "ECG",
      "X-ray (chest)",
      "Ultrasound (pelvis)",
      "Iron profile",
      "Ultrasound (breast)",
      "Pap smear",
      "Thyroid profile",
      "Complete hemogram",
      "Blood pressure monitoring",
      "Vitamin profile",
      "Consultation with specialist obstetrician and gynaecologist",
      "Diabetic screening",
      "Liver profile",
      "CPK – serum",
      "Urine routine",
      "Lipid profile",
      "Prolactin",
      "Renal profile",
      "Pancreas profile",
      "Follicle stimulating hormone (FSH)",
      "Gamma-glutamyl transferase",
      "Rheumatology profile"
    ]
  }
];

var NEWS = [
  {
    "date": "17 February 2025",
    "en": "Hodan Hospital Officially Inaugurated by President Dr. Hassan Sheikh Mohamud",
    "url": "https://sonna.so/en/president-hassan-sheikh-inaugurates-modern-hospital-in-mogadishu/"
  },
  {
    "date": "",
    "en": "Hodan Hospital Signs Agreement with BECO Electricity Company for Mutual Collaboration and Staff Healthcare",
    "url": ""
  },
  {
    "date": "",
    "en": "Hodan Hospital Signs Collaboration Agreement with Rikaab and Tabaarak ICT",
    "url": ""
  },
  {
    "date": "",
    "en": "Hodan Hospital Sponsors Iftar for SOMSUD — Somali Graduates from Sudan",
    "url": ""
  }
];

var ABOUT_TEXT = [
  "Hospital Overview",
  "Hodan Hospital is a healthcare service provider incorporated and registered in Somalia to offer affordable inpatient and outpatient healthcare services. Headquartered in Hodan District, Mogadishu, the hospital plans to open a chain of clinics across the capitals of Somalia’s Federal States. Its focus is standardized, quality and affordable healthcare for communities in Somalia and beyond.",
  "The hospital is operated by experienced medical practitioners and management staff, with an emphasis on internationally accepted healthcare standards, disease management protocols, drug formularies and modern information technology to support consistent treatment for clients across the Horn of Africa and Sub-Saharan Africa.",
  "The hospital occupies a modern commercial building in Mogadishu’s Central Business District, with slightly more than 5,000 square metres of usable space. Its layout supports patient movement, efficient service flow and privacy. Operational policies and procedures support efficiency, effectiveness and cost control.",
  "Quality Management",
  "Hodan Hospital is committed to patient safety, operational excellence and continuous improvement through its Quality Management System (QMS). Its approach includes infection control, healthcare standards, staff training, medical technology and modern patient rooms. Evidence-based practices, patient feedback, clinical audits and quality assurance support ongoing improvement. Strong leadership and patient-centred care underpin its commitment to safety, reliability and excellence.",
  "Hodan Hospital – Quality Care, Safe Lives.",
  "Hospitality",
  "The hospitality team aims to provide a compassionate and supportive environment that promotes recovery. Clean, comfortable rooms, attentive staff, meals tailored to dietary requirements and emotional support help patients feel respected and cared for throughout their stay.",
  "Healthcare Team",
  "Doctors, nurses, specialists, technicians and support staff work together to deliver patient care. Collaboration, communication, continuing education and training support safe, compassionate and effective healthcare."
];

var CALL_CENTER = [
  "Hodan Hospital’s call center supports timely communication and access to healthcare information.",
  "Key services",
  "Appointment scheduling, rescheduling and cancellation.",
  "Information about hospital services, specialists and operating hours.",
  "Patient inquiries about medical services, insurance and billing.",
  "Contact",
  "Helpline: 1234.",
  "The call center aims to improve patient satisfaction, reduce waiting times and improve accessibility."
];

/* Somali UI strings; English text lives in the HTML and is used as the default. */
var T_SO = {
  emergency24: 'Gurmad 24/7', navHome: 'Bogga Hore', navAbout: 'Annaga', navWho: 'Annaga Ayaa Nahay', navMgmt: 'Maamulka', navNews: 'Warar',
  navSpec: 'Takhasusyo', navAllSpecs: 'Dhammaan takhasusyada →', navDoctors: 'Dhakhaatiir', navChecks: 'Baaritaanno',
  navPatients: 'Bukaanka', navServices: 'Adeegyada Caafimaadka', navIntl: 'Bukaanka Qurbajoogta', navContact: 'Xiriir',
  bookAppt: 'Qabso Ballan', findDoctor: 'Raadi Dhakhtar', callUs: 'Na Wac', learnMore: 'Faahfaahin', viewAll: 'Eeg dhammaan', viewProfile: 'Eeg Profile-ka',
  home: 'Bogga Hore', allSpecs: 'Dhammaan takhasusyada', anyDoctor: 'Dhakhtar kasta', all: 'Dhammaan', search: 'Raadi',
  fSpec: 'Dooro takhasus', fDocName: 'Magaca dhakhtarka', tabDoctor: 'Raadi Dhakhtar', tabAppt: 'Qabso Ballan', tabCheck: 'Baaritaan Caafimaad',
  h1tag: 'Isbitaalka Gaarka ah ee Ugu Horreeya Muqdisho', h1title: 'Daryeel Caafimaad oo Heer Caalami ah, Halkan Soomaaliya',
  h1text: 'Isbitaalka Hodan wuxuu qoys kasta u keenayaa daryeel tayo leh oo la awoodi karo, si aadan ugu baahan inaad dibadda u safarto.',
  h2tag: 'Gurmadka & Shilalka', h2title: 'Qolka Gurmadka 24 Saac & Adeegga Ambalaaska', h2text: 'Kooxdeena gurmadku waa diyaar habeen iyo maalin. Na soo wac, ambalaaskeenu si degdeg ah ayuu kuu soo gaarayaa.',
  h3tag: 'Xarumaha Heerka Sare', h3title: 'Dhakhaatiir Takhasus leh oo Marxalad Kasta oo Nolosha ah',
  h3text: 'Daawaynta guud, wadnaha, maskaxda, lafaha, haweenka, carruurta, kelyaha, dhegta-sanka-cunaha, indhaha, ilkaha iyo kuwo kale, dhammaan hal saqaf hoostiis.',
  qCall: 'Xarunta Wicitaanka', qCallSub: 'Ballan & macluumaad', qEmer: 'Gurmad 24/7', qWa: 'WhatsApp', qWaSub: 'Noo soo dir fariin', qIntl: 'Bukaanka Qurbajoogta', qIntlSub: 'Ka hor safarka nala xiriir',
  coe: 'Xarumaha Heerka Sare', specTitle: 'Takhasusyadayada', specSub: 'Qaybo khibrad leh oo leh dhakhaatiir takhasus leh iyo qalab casri ah.',
  ourDoctors: 'Dhakhaatiirtayada', docTitle: 'La Kulan Takhaasusleyaasha', docSub: 'Dhakhaatiir khibrad leh oo maxalli iyo caalami ah.',
  chkEyebrow: 'Caafimaad Ka Hortag', chkTitle: 'Baaritaanka Caafimaadka', chkSub: 'Cudurka hore u ogow. Dooro baaritaanka kugu habboon adiga iyo qoyskaaga.',
  priceCall: 'Qiimaha: na soo wac', testsIncl: 'baaritaan', bookCheck: 'Qabso Baaritaanka',
  intlEyebrow: 'Bukaanka Qurbajoogta & Gobollada', intlTitle: 'Ka hor intaadan dibadda u safrin, Hodan la xiriir',
  intlText: 'Haddii aad ku nooshahay dibadda ama gobollada, warbixintaada caafimaad noo soo dir. Dhakhaatiirtayadu way eegi doonaan, waxaana kaa caawin doonaa qorshaynta booqashadaada.',
  st1: 'Noo soo dir warbixintaada', st1s: 'WhatsApp ama iimeyl ku soo dir warbixinnada iyo sawirrada.',
  st2: 'Dhakhtar ayaa eegaya', st2s: 'Takhaasusle ayaa dib u eegaya xaaladdaada.', st3: 'Qorshee booqashada', st3s: 'Waxaan kuu qabanaynaa ballanta iyo taariikhda.',
  st4: 'Daawayn & la socod', st4s: 'Daryeel iyo la socod ka dib daawaynta.',
  facEyebrow: 'Adeegyada Caafimaadka', facTitle: '24 saac maalintii, qof kasta', facSub: 'Laga bilaabo baaritaanka ilaa bogsashada, adeeg kasta wuxuu yaallaa Isbitaalka Hodan.',
  whoWeAre: 'Annaga Ayaa Nahay', aboutTitle: 'Daryeel bukaanka diiradda saaraya, laga dhisay Soomaaliya, loogu talagalay Soomaalida',
  aboutP1: 'Isbitaalka Hodan waa adeeg-bixiye caafimaad oo gaar ah oo laga diiwaangeliyay Soomaaliya, kana bixiya daryeel bukaan-jiif iyo bukaan-socod labadaba. Ujeeddadeennu waa daryeel heer caalami ah, tayo leh oo la awoodi karo.',
  aboutP2: 'Waxaa aasaasay koox xirfadlayaal caafimaad oo qurbajoog Soomaaliyeed ah, waxaana xarigga ka jaray Madaxweyne Xasan Sheekh Maxamuud bishii Febraayo 2025. Isbitaalku wuxuu ku yaal dhismo casri ah oo ka badan 5,000 m², wuxuuna leeyahay 200 sariir iyo afar qol oo qalliin.',
  sStaff: 'Dhakhaatiir & Shaqaale', sBeds: 'Sariirood', sOT: 'Qolalka Qalliinka', sEmer: 'Daryeel Gurmad',
  whyEyebrow: 'Maxaad u Dooranaysaa Hodan', whyTitle: 'Daryeel aad ku kalsoonaan karto',
  w1t: 'Takhaasusleyaal Khibrad leh', w1p: 'Dhakhaatiir maxalli iyo caalami ah oo ka shaqeeya laba iyo toban qaybood.',
  w2t: 'Tiknoolajiyad Casri ah', w2p: 'Cath lab, sawirka wadnaha, shaybaar casri ah iyo afar qol oo qalliin.',
  w3t: 'Tayo la Awoodi karo', w3p: 'Daawayn tayo sare leh oo qiimo macquul ah, adigoon bixin kharashka safarka dibadda.',
  newsEyebrow: 'Warar', newsTitle: 'Wararka Isbitaalka Hodan', readMore: 'Akhri wararka →',
  ctaTitle: 'Ma u baahan tahay caawimaad caafimaad?', ctaText: 'Kooxdeena wicitaanku waa diyaar 24 saac.',
  quickLinks: 'Xiriiriyeyaal Degdeg ah', contactEyebrow: 'Nala Soo Xiriir', rights: 'Xuquuqda oo dhan way xifdisan tahay.',
  disclaimer: 'Jadwalka dhakhaatiirta waa is beddeli karaa. Fadlan wac si aad u xaqiijiso.',
  footAbout: 'Machad caafimaad oo gaar ah oo heer sare ah oo ku yaal Muqdisho, una heellan daryeel caafimaad oo heer sare ah iyo hal-abuur.',
  hoursVal: 'Furan 24 saac, 7 maalmood', address: 'Ciwaanka', phone: 'Telefoon', emailUs: 'Iimeyl', hours: 'Saacadaha',
  overview: 'Guudmar', treatments: 'Daawaynta & Adeegyada', ourSpecialists: 'Takhaasusleyaasha', faq: 'Su\'aalaha Badanaa la Iswaydiiyo',
  otherSpecs: 'Takhasusyo kale', needHelp: 'Caawimaad ma u baahan tahay?', needHelpTxt: 'Xarunta wicitaanka ayaa kaa caawin doonta ballanta.',
  speciality: 'Takhasus', department: 'Qaybta', experience: 'Khibrad', hospital: 'Isbitaal', location: 'Goobta',
  docsFound: 'dhakhtar ayaa la helay', noDocs: 'Dhakhtar lama helin. Fadlan isku day raadin kale.', noDocsDept: 'Fadlan wac xarunta wicitaanka si aad u ogaato dhakhaatiirta qaybtan.',
  aboutDoc: 'Ku saabsan', bookWith: 'Ballan la qabso',
  formTitle: 'Codso Ballan', fName: 'Magaca oo buuxa *', fPhone: 'Lambarka telefoonka *', fDept: 'Qaybta', fDoc: 'Dhakhtarka', fDate: 'Taariikhda la doorbiday', fGender: 'Jinsiga',
  optSelect: 'Dooro', optMale: 'Lab', optFemale: 'Dhedig', fMsg: 'Sababta booqashada', sendEmail: 'Dir Codsiga', sendWa: 'Ku dir WhatsApp',
  formNote: 'Codsigaagu wuxuu ka furmayaa iimeylkaaga ama WhatsApp-ka si aad toos ugu dirto isbitaalka.',
  formErr: 'Fadlan qor magacaaga iyo lambarka telefoonka.', formOk: 'Mahadsanid! Codsigaaga waa diyaar, fadlan riix dir si aad u dhammaystirto.',
  apptEyebrow: 'Ballamaha', apptTitle: 'Ballan ka qabso dhakhtar takhasus leh', apptText: 'Buuxi foomka, xarunta wicitaanka ayaa xaqiijin doonta booqashadaada. Xaaladaha degdegga ah si toos ah noo soo wac.',
  callCenter: 'Xarunta Wicitaanka', mgmtTitle: 'Maamulka', buildingTitle: 'Dhismaheena', contactTitle: 'Waxaan halkan u joognaa inaan ku caawinno',
  pkgNote: 'Waxyaabaha ku jira baaritaannadu waa tusaale. Fadlan wac si aad u xaqiijiso baaritaannada iyo qiimaha.',
  pServices: 'Adeegyada Caafimaadka', pServicesSub: 'Adeeg kasta oo aad u baahan tahay, 24 saac maalintii.',
  pSpecs: 'Takhasusyada', pSpecsSub: 'Laba iyo toban qaybood oo takhasus leh, hal saqaf hoostiis.',
  pDocs: 'Raadi Dhakhtar', pDocsSub: 'Ku raadi dhakhaatiirtayada magac ama takhasus.',
  pChecks: 'Baaritaanka Caafimaadka', pChecksSub: 'Baaritaan joogto ah ayaa cudurrada hore u ogaada.',
  pIntl: 'Bukaanka Qurbajoogta & Gobollada', pIntlSub: 'Daryeel heer caalami ah oo Muqdisho ah, adigoon dibadda u safrin.',
  pAbout: 'Nagu Saabsan', pAboutSub: 'Isbitaal casri ah oo ay dhiseen xirfadlayaal caafimaad oo qurbajoog Soomaaliyeed ah.',
  pContact: 'Nala Soo Xiriir', pContactSub: 'Na wac, noo qor ama noo kaalay.', pBook: 'Qabso Ballan', pBookSub: 'Codso ballan, xarunta wicitaankeenu way ku soo wici doontaa.',
  intlWhy: 'Maxaad Hodan u dooranaysaa', iw1: 'Ka badbaadi kharashka iyo dhibka safarka dibadda', iw2: 'Dhakhaatiir maxalli iyo caalami ah oo khibrad leh', iw3: 'Qoyskaaga oo kuu dhow inta aad daawaynayso', iw4: 'ICU, NICU, cath lab iyo afar qol oo qalliin',
  sendReports: 'Noo soo dir warbixintaada', badgeTxt: 'Xarun casri ah<br>oo ay dhiseen qurbajoog',

  /* Launch content: these override the demo strings above. */
  callUs: 'Na Wac', helpline: 'Khadka xarunta wicitaanka', callCenter: 'Xarunta Wicitaanka', navMgmt: 'Hoggaanka', mgmtTitle: 'Kooxda hoggaanka',
  h1tag: 'Isbitaalka Hodan, Muqdisho', h1title: 'Daryeel Tayo leh, Nolol Badbaado leh.',
  h1text: 'Daryeel caafimaad oo heer caalami ah, tayo leh oo la awoodi karo oo loogu talagalay bulshooyinka Soomaaliya iyo ka baxsan, laga bilaabo Degmada Hodan, Muqdisho.',
  h2text: 'Adeegga ambalaaskeenu waa qayb ka mid ah jawaab-celinta gurmadka isbitaalka, isagoo bixiya daryeel caafimaad oo degdeg ah oo wax ku ool ah.',
  h3text: 'Daawaynta guud, wadnaha, qalliinka maskaxda, lafaha, haweenka iyo dhalmada, carruurta, qalliinka guud, dhegta-sanka-cunaha, indhaha, ilkaha iyo maqaarka.',
  aboutP1: 'Isbitaalka Hodan waa adeeg-bixiye caafimaad oo laga diiwaangeliyay Soomaaliya si uu u bixiyo adeegyo bukaan-jiif iyo bukaan-socod oo la awoodi karo. Xaruntiisu waxay ku taal Degmada Hodan, Muqdisho, diiradduna waa daryeel caafimaad oo heer caalami ah, tayo leh oo la awoodi karo.',
  aboutP2: 'Isbitaalka waxaa maamula dhakhaatiir iyo maamulayaal khibrad leh, iyadoo la raacayo heerarka caafimaadka ee caalamka laga aqbalay, hab-raacyada maaraynta cudurrada iyo tiknoolajiyada macluumaadka casriga ah.',
  badgeTxt: 'Meel la isticmaali karo<br>bartamaha ganacsiga Muqdisho',
  sDoctors: 'Dhakhaatiir takhasus leh', sDepts: 'Qaybaha takhasuska', sServices: 'Adeegyo & kiliinikyo', sER: 'Qolka gurmadka',
  w1t: 'Maaraynta Tayada', w1p: 'Badbaadada bukaanka, xakamaynta caabuqa, tababarka shaqaalaha, hubinta caafimaadka iyo ra’yiga bukaanka ayaa taageera horumarka joogtada ah.',
  w2t: 'Martigelin', w2p: 'Qolal nadiif ah oo raaxo leh, shaqaale feejigan iyo cunto ku habboon baahida cuntada ayaa bukaanka ka dhigaya inay dareemaan daryeel.',
  w3t: 'Kooxda Caafimaadka', w3p: 'Dhakhaatiir, kalkaaliyeyaal, takhaasusleyaal, farsamoyaqaanno iyo shaqaale taageero ayaa wada shaqeeya si ay u bixiyaan daryeel badbaado leh.',
  intlEyebrow: 'Bukaanka Soomaaliya iyo gobolka', intlTitle: 'Daryeel joogto ah oo heer caalami ah oo Muqdisho ah',
  intlText: 'Isbitaalka Hodan wuxuu raacaa heerarka caafimaadka ee caalamka laga aqbalay iyo hab-raacyada maaraynta cudurrada si uu daryeel joogto ah ugu fidiyo macaamiisha Geeska Afrika iyo Afrika ka hooseysa Saxaraha. Xarunta wicitaankeenu waxay kaa caawin kartaa qorshaynta booqashadaada.',
  st1: 'Ballamaha', st1s: 'Qabsashada, dib u dhigista iyo joojinta ballamaha.', st2: 'Macluumaad', st2s: 'Adeegyada isbitaalka, takhaasusleyaasha iyo saacadaha shaqada.',
  st3: 'Su’aalaha bukaanka', st3s: 'Adeegyada caafimaadka, caymiska iyo lacag-bixinta.', st4: 'Na wac', st4s: '+252 61 1678555 ama khadka xarunta wicitaanka 1234.',
  iw1: 'Dhakhaatiir iyo maamulayaal khibrad leh', iw2: 'Heerarka iyo hab-raacyada caafimaadka ee caalamka laga aqbalay', iw3: 'Qolal nadiif ah oo raaxo leh iyo cunto ku habboon baahidaada', iw4: 'ICU, NICU iyo xanaanada dhallaanka, shaybaarka iyo sawirka caafimaadka',
  pIntl: 'Bukaanka Qurbajoogta & Gobollada', pIntlSub: 'Booqashadaada Isbitaalka Hodan ku qorshee xarunta wicitaankeenna.', sendReports: 'WhatsApp nagu soo qor',
  pAboutSub: 'Daryeel Tayo leh, Nolol Badbaado leh.', pSpecsSub: 'Qaybaha takhasuska, hal saqaf hoostiis.',
  facTitle: 'Adeegyadayada iyo kiliinikyada', facSub: 'Kiliinikyo, daryeel bukaan-jiif, qaybaha isbitaalka iyo baaritaanno caafimaad oo laga helo Isbitaalka Hodan.',
  ctaText: 'Wac isbitaalka ama khadka xarunta wicitaanka 1234.', priceCall: 'Qiimaha iyo helitaanka: fadlan wac', forWomen: 'Haweenka', forMen: 'Ragga',
  pkgNote: 'Waxyaabaha ku jira baaritaannadu waa sida ay ugu qoran yihiin buug-yaraha isbitaalka. Fadlan wac si aad u xaqiijiso baaritaannada iyo qiimaha ka hor ballanta.',
  expWord: 'khibrad', department: 'Qaybta', qualifications: 'Shahaadooyinka', otherSpecialists: 'Takhaasusleyaal kale (Gurmad, ICU, Kaadi-mareen)',
  pServicesSub: 'Kiliinikyo, daryeel bukaan-jiif, qaybaha isbitaalka iyo baaritaanno caafimaad.',
  confirmNote: 'Adeegyada iyo helitaanka dhakhaatiirta way is beddeli karaan. Fadlan wac isbitaalka si aad u xaqiijiso ka hor booqashadaada.'
};
