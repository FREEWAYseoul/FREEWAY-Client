import 'regenerator-runtime/runtime';

// import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// import { useSearchContext } from '../components/domain/Search/SearchContext';
// import useSearchBar from './useSearchBar';

const useSpeech = () => {
  // const route = useRouter();
  const [keywords, setKeywords] = useState('');
  // const { keywords, setKeywords } = useSearchContext();
  // const { selectStationByKeywords, saveStation, resetKeywords } = useSearchBar();
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const startListening = useCallback(() => {
    // resetKeywords();
    SpeechRecognition.startListening({ language: 'ko-KR' });
    const timer = setTimeout(() => {
      SpeechRecognition.stopListening();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const endListening = useCallback(() => {
    resetTranscript();
    setKeywords('');
    SpeechRecognition.stopListening();
  }, [resetTranscript]);

  // useEffect(() => {
  //   if (!listening && keywords) {
  //     const selectedStation = selectStationByKeywords(keywords);
  //     if (!selectedStation || !keywords) {
  //       alert('일치하는 역이 없습니다. 다시 한 번 말씀해주세요.');
  //       resetKeywords();
  //       return;
  //     }
  //     saveStation(selectedStation);
  //     route.push('/result');
  //   }
  // }, [listening]);

  useEffect(() => {
    setKeywords(transcript.replace(/\s/g, ''));
  }, [transcript]);

  return { keywords, startListening, endListening, listening };
};

export default useSpeech;
