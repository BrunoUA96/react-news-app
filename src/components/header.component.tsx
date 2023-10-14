import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  fetchRegions,
  selectRegions,
  setRegion,
} from '@/redux/slices/regionsSlice';
import { useAppDispatch } from '@/redux/store';

export const Header: FC = () => {
  const { regionsList, activeRegion } = useSelector(selectRegions);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

  const onChangeRegion = (region: string) => {
    dispatch(setRegion(region));
  };

  return (
    <div className="flex justify-between items-center border-b pb-3">
      {/* Greetings & Date today */}
      <div>
        <h1 className="text-3xl font-bold">Good morning</h1>
        <span className="text-sm text-gray-500 font-light">
          Monday, Jaunary 25, 2023
        </span>
      </div>
      {/* Weather */}
      <div className="flex flex-col items-end">
        <div className="flex">
          {Object.keys(regionsList).length && (
            <select
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
              value={Object.values(regionsList).find(
                region => region === activeRegion,
              )}
              onChange={e => onChangeRegion(e.target.value)}
            >
              {Object.keys(regionsList)
                .sort()
                .map(region => {
                  return (
                    <option
                      key={regionsList[region]}
                      value={regionsList[region]}
                    >
                      {region}
                    </option>
                  );
                })}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};
