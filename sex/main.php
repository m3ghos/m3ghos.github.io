<?php
// API endpoint URL
$generate = rand(10, 100000);
$url = 'https://pin.porn/api/videoInfo/?ipp='.$generate.'()&from_page=1';

// Initialize curl session
$curl = curl_init();

// Set the curl options
curl_setopt_array($curl, [
    CURLOPT_URL => $url, // Set the URL
    CURLOPT_RETURNTRANSFER => true, // Return the response as a string instead of outputting it directly
    CURLOPT_FOLLOWLOCATION => true, // Follow any redirects
    CURLOPT_SSL_VERIFYPEER => false, // Disable SSL certificate verification (not recommended in production)
]);

// Execute the curl session
$response = curl_exec($curl);

// Check for errors
if(curl_errno($curl)){
    // If there is an error, output it
    echo 'Curl error: ' . curl_error($curl);
}

// Close the curl session
curl_close($curl);

// Output the response
echo $response;
?>
