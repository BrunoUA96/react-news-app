import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchRegions,
  selectRegions,
  setRegion
} from '../redux/slices/regionsSlice';

export const Header = () => {
  const { regionsList, activeRegion } = useSelector(selectRegions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegions());
  }, []);

  const onChangeRegion = region => {
    dispatch(setRegion(region));
  };

  return (
    <div className="flex justify-between border-b pb-3">
      {/* Greetings & Date today */}
      <div>
        <h1 className="text-3xl font-bold">Good morning</h1>
        <span className="text-sm text-gray-500 font-light">
          Monday, Jaunary 25, 2023
        </span>
      </div>
      {/* Weather */}
      <div className="flex flex-col items-end">
        <div className="text-xl font-bold">28°C</div>
        <div className="flex">
          <select
            id="countries"
            className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            onChange={e => onChangeRegion(e.target.value)}
          >
            {Object.keys(regionsList)
              .sort()
              .map(region => (
                <option
                  key={regionsList[region]}
                  value={regionsList[region]}
                  selected={activeRegion === regionsList[region]}
                >
                  {region}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};
