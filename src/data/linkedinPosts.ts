export interface LinkedInPostAuthor {
  name: string;
  title: string;
  profileImage: string;
  profileUrl: string;
}

export interface LinkedInPostImage {
  src: string;
  alt: string;
}

export interface LinkedInPost {
  id: string;
  author: LinkedInPostAuthor;
  date?: string;
  title: string;
  preview: string;
  content: string;
  hashtags: string[];
  image?: LinkedInPostImage;
  postUrl: string;
}

export const linkedInProfile = {
  name: "Anil Kumar",
  title: "Senior Android & Flutter Developer",
  profileImage: "/images/linkedin/profile.png",
  profileUrl: "https://www.linkedin.com/in/anil-mandyal",
  recentActivityUrl:
    "https://www.linkedin.com/in/anil-mandyal/recent-activity/all/",
};

export const linkedInPosts: LinkedInPost[] = [
  {
    id: "sharedpreferences-vs-datastore",
    author: {
      name: "Anil Kumar",
      title: "Senior Android & Flutter Developer",
      profileImage: "/images/linkedin/profile.png",
      profileUrl: "https://www.linkedin.com/in/anil-mandyal",
    },
    title: "SharedPreferences vs DataStore: What Should You Use Today? 📱",
    preview:
      "A quick guide to small-data storage in Android, based on current guidance. SharedPreferences lacks type safety, while modern Jetpack DataStore uses Coroutines and Flow for safe, asynchronous storage.",
    content: `A quick guide to small-data storage in Android, based on current Android guidance.

⚠️ SharedPreferences (older approach)

• Synchronous APIs can cause main-thread jank or ANRs.
• No schema, so keys can hold mixed types and fail at runtime.
• Still fine in existing apps, but Google recommends DataStore for new code.

✅ Jetpack DataStore

• Built on Kotlin Coroutines and Flow.
• Asynchronous, with transactional updates.
• Preferences DataStore: simple key-value storage.
• Proto DataStore: structured, strongly typed data.
• Supports migration from SharedPreferences.

🔐 Need secure storage?

DataStore doesn't encrypt data by default. A common approach:

→ Generate a key using Android Keystore.
→ Encrypt data with AES-GCM (libraries like Tink can help).
→ Store the encrypted bytes in DataStore.

⚠️ EncryptedSharedPreferences is deprecated, so avoid it in new code.

📦 For large or relational data, use Room.

Choosing storage is an engineering trade-off, not just syntax.

What are you using for secure storage in your Android apps? Did I miss anything? I'd love to learn from your experience. 👇`,
    hashtags: [
      "#android",
      "#kotlin",
      "#jetpackcompose",
      "#datastore",
      "#androiddev",
      "#mobiledevelopment",
    ],
    image: {
      src: "/images/linkedin/sharedpreferences-vs-datastore.png",
      alt: "SharedPreferences vs DataStore: What Should You Use Today?",
    },
    postUrl: "https://lnkd.in/p/diY69t6i",
  },
  {
    id: "suspend-functions-under-the-hood",
    author: {
      name: "Anil Kumar",
      title: "Senior Android & Flutter Developer",
      profileImage: "/images/linkedin/profile.png",
      profileUrl: "https://www.linkedin.com/in/anil-mandyal",
    },
    title:
      "Suspend Functions Under the Hood: What Really Happens When a Function Suspends and Resumes?",
    preview:
      "Does suspend create a new thread in Kotlin? No. The compiler transforms your function into a state machine with continuations, allowing execution to suspend and resume without blocking the thread.",
    content: `Does suspend create a new thread in Kotlin?

No. It doesn’t even guarantee that your function will actually suspend.

So, what really happens when a suspend function suspends and resumes?

🔹 The compiler adds a hidden Continuation parameter (CPS transformation).
🔹 Your function is transformed into a state machine, tracked using a label.
🔹 When it suspends, the generated code returns COROUTINE_SUSPENDED, so the thread can be freed for other work.
🔹 Variables needed after suspension are saved in the continuation object on the heap.
🔹 resumeWith() → invokeSuspend() re-enters the generated state machine and continues from the saved state.
🔹 The dispatcher controls where and how coroutine execution is scheduled.

I’ve written a deep dive covering decompiled code, continuations, the continuation chain (the “virtual call stack”), dispatchers, and cancellation.

Understanding these internals makes coroutine execution, thread switching, and cancellation much easier to reason about.

📖 Full article in the first comment 👇`,
    hashtags: [
      "#kotlin",
      "#kotlincoroutines",
      "#androiddev",
      "#softwareengineering",
    ],
    image: {
      src: "/images/linkedin/does_suspend_create_a_new_thread.jpeg",
      alt: "Does suspend create a new thread in Kotlin? Infographic",
    },
    postUrl: "https://lnkd.in/p/duXrtx_7",
  },
  {
    id: "android-security-3-practices",
    author: {
      name: "Anil Kumar",
      title: "Senior Android & Flutter Developer",
      profileImage: "/images/linkedin/profile.png",
      profileUrl: "https://www.linkedin.com/in/anil-mandyal",
    },
    title: "Android Security: 3 Practices Every Developer Should Know",
    preview:
      "Android security is more than authentication and HTTPS. A secure app requires multiple layers, from encrypting local data with Keystore to verifying app integrity with the Play Integrity API.",
    content: `🔐 Android security is more than authentication and HTTPS.

A secure app needs multiple layers, from encrypting sensitive local data to validating app integrity on the backend.

3 practices every Android developer should know:

🔹 Protect sensitive data: Use Android Keystore with AES-GCM instead of storing sensitive information in plain text.

🔹 Strengthen authentication: Use BiometricPrompt for local authentication, and Credential Manager for modern sign-in and passkeys.

🔹 Verify app integrity: Use the Play Integrity API so your backend can detect potentially risky app environments before allowing sensitive operations.

I've published a practical guide covering:
• Keystore and AES-GCM encryption
• Biometrics, Credential Manager, and passkeys
• Network Security Configuration
• Play Integrity API
• Secure token management and common mistakes
• A 15-point security checklist

It includes Kotlin code examples, implementation guidance, and official references.

Which of these do you already use in your apps? 👇

The article link is in the first comment.`,
    hashtags: [
      "#androiddevelopment",
      "#kotlin",
      "#androidsecurity",
      "#mobiledevelopment",
      "#softwareengineering",
      "#appsecurity",
    ],
    image: {
      src: "/images/linkedin/android_security_is_more_than_authentication.jpeg",
      alt: "Android Security: 3 Practices Every Developer Should Know Infographic",
    },
    postUrl: "https://lnkd.in/p/dzFaGexA",
  },
];
