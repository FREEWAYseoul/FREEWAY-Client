import 'regenerator-runtime/runtime';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SPEECH_TIME = 5000;

const useStationSpeech = () => {
  const route = useRouter();
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [keywords, setKeywords] = useState('');

  const startListening = useCallback(() => {
    SpeechRecognition.startListening({ language: 'ko-KR' });
    const timer = setTimeout(() => {
      SpeechRecognition.stopListening();
    }, SPEECH_TIME);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const endListening = () => {
    resetSpeeachKeywords();
    SpeechRecognition.stopListening();
  };

  const resetSpeeachKeywords = () => {
    setKeywords('');
    resetTranscript();
  };

  useEffect(() => {
    if (!listening && keywords) {
      const selectedStation = '';
      if (!selectedStation || !keywords) {
        alert('일치하는 역이 없습니다. 다시 한 번 말씀해주세요.');
        return;
      }
      route.push('/result');
    }
  }, [keywords, listening, route]);

  useEffect(() => {
    setKeywords(transcript.replace(/\s/g, ''));
  }, [transcript]);

  useEffect(() => {
    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  return { keywords, startListening, endListening, listening };
};

export default useStationSpeech;
