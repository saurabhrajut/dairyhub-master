package com.example.dairyhub

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.dairyhub.ui.theme.DairyHubTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            DairyHubTheme {
                // यहाँ Greeting की जगह DairyHubAppScreen() को कॉल किया गया है
                DairyHubAppScreen()
            }
        }
    }
}

// यह आपकी ऐप की नई मेन स्क्रीन है
@Composable
fun DairyHubAppScreen(modifier: Modifier = Modifier) {
    Scaffold(modifier = modifier.fillMaxSize()) { innerPadding ->
        // Box का उपयोग करके टेक्स्ट को सेंटर में ला रहे हैं
        Box(
            modifier = Modifier
                .padding(innerPadding)
                .fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            Text(text = "Welcome to Dairy Hub!")
        }
        // आप अपना सारा UI कोड इस Scaffold के अंदर बनाना शुरू कर सकते हैं
    }
}

// यह Preview आपकी नई स्क्रीन को दिखाएगा
@Preview(showBackground = true)
@Composable
fun DairyHubAppScreenPreview() {
    DairyHubTheme {
        DairyHubAppScreen()
    }
}

// अब Greeting फंक्शन की कोई जरूरत नहीं है, आप चाहें तो उसे डिलीट कर सकते हैं
/*
@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    DairyHubTheme {
        Greeting("Android")
    }
}
*/
