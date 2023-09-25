import 'regenerator-runtime/runtime';

import { useRouter } from 'next/navigation';
import { useCallback, useContext, useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { useStation } from '@/common/api/stations';
import { SearchContext } from '@/common/context/SearchContext';

const SPEECH_TIME = 5000;

const useStationSpeech = () => {
  const { setSelectedStationId } = useContext(SearchContext);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const { data: stations } = useStation();
  const [searchKeyword, setSearchKeyword] = useState('');
  const route = useRouter();

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
    setSearchKeyword('');
    resetTranscript();
  };

  const handleSpeech = () => {
    if (listening) {
      endListening();
    } else {
      startListening();
    }
  };

  useEffect(() => {
    if (!listening && searchKeyword) {
      const selectedStation =
        stations && stations.find((item) => item.stationName === searchKeyword);
      if (!selectedStation || !searchKeyword) {
        alert('일치하는 역이 없습니다. 다시 한 번 말씀해주세요.');
        return;
      }

      setSelectedStationId(Number(selectedStation.stationId));
      route.push('/subway');
    }
  }, [searchKeyword, listening, stations, setSelectedStationId, route]);

  useEffect(() => {
    setSearchKeyword(transcript.replace(/\s/g, '').replace(/역$/, '').trim());
  }, [transcript]);

  useEffect(() => {
    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  return { searchKeyword, handleSpeech, listening };
};

export default useStationSpeech;
