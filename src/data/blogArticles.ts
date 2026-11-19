export interface BlogArticle {
  id: string;
  category: string;
  title: string;
  description: string;
  url: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "suspend-functions-under-the-hood",
    category: "KOTLIN / COROUTINES",
    title:
      "Suspend Functions Under the Hood: What Really Happens When a Function Suspends and Resumes?",
    description:
      "Understanding Continuations, State Machines, CPS Transformation, and Coroutine Resumption in Kotlin. We use Kotlin's suspend functions almost every day in Android development. Whether we're making a network request using Retrofit, reading data from Room, performing background operations, or collecting a Flow, the suspend keyword is everywhere.",
    url: "https://codewithmandyal.medium.com/suspend-functions-under-the-hood-what-really-happens-when-a-function-suspends-and-resumes-b051e034f7c3?sharedUserId=codewithmandyal",
  },
  {
    id: "android-security-checklist",
    category: "ANDROID DEVELOPMENT",
    title:
      "Android Security Checklist: Keystore, Biometrics, and Play Integrity in Kotlin",
    description:
      "A practical guide to protecting Android applications using Android Keystore, BiometricPrompt, Credential Manager, AES-GCM encryption, Network Security Configuration, and Play Integrity API. Modern Android applications handle sensitive information such as authentication tokens, personal data, payment details, and private user activity. Protecting this information requires more than adding a login screen.",
    url: "https://codewithmandyal.medium.com/android-security-checklist-keystore-biometrics-and-play-integrity-in-kotlin-1bdc3d77c7d6?sharedUserId=codewithmandyal",
  },
  {
    id: "offline-first-android-app",
    category: "ANDROID DEVELOPMENT",
    title:
      "Building an Offline-First Android App with Kotlin, Room, and WorkManager",
    description:
      "A practical guide to local-first data, background sync, and conflict handling in Jetpack Compose apps. Understand how offline-first Android apps work, explore their architecture, and implement a notes app using Kotlin, Room, and WorkManager.",
    url: "https://medium.com/@codewithmandyal/building-an-offline-first-android-app-with-kotlin-room-and-workmanager-8a30662aa348",
  },
  {
    id: "kotlin-functions-every-android-developer-should-understand",
    category: "KOTLIN / ANDROID",
    title: "Kotlin Functions Every Android Developer Should Understand",
    description:
      "Kotlin provides several powerful features that make functions more expressive, concise, and flexible. Learn 7 important Kotlin function concepts with simple examples—including higher-order, extension, inline, noinline, and crossinline functions.",
    url: "https://codewithmandyal.medium.com/kotlin-functions-every-android-developer-should-understand-267ad573c812",
  },
  {
    id: "solid-principles-in-android-clean-architecture",
    category: "ANDROID DEVELOPMENT",
    title: "SOLID Principles in Android Clean Architecture",
    description:
      "Many Android developers memorize SOLID principles for interviews but struggle to apply them in real projects. Explore how SOLID works with Kotlin, MVVM, Hilt, and Clean Architecture.",
    url: "https://medium.com/@codewithmandyal/solid-principles-in-android-clean-architecture-3f2c72472202",
  },
];
