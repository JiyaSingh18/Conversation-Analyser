import fs from 'fs';
import axios from 'axios';

async function analyzeTranscript() {
  try {
    // Read the transcript file
    const transcript = fs.readFileSync('transcript.txt', 'utf8');
    
    // Call the API to analyze the transcript
    const response = await axios.post('http://localhost:4000/api/analyze-text', {
      text: transcript
    });
    
    // Write the analysis to a JSON file
    fs.writeFileSync('analysis-result.json', JSON.stringify(response.data, null, 2));
    
    console.log('Analysis completed and saved to analysis-result.json');
  } catch (error) {
    console.error('Error analyzing transcript:', error.message);
    if (error.response) {
      console.error('Server response:', error.response.data);
    }
  }
}

analyzeTranscript(); 