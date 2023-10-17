import { FC } from 'react';
import { useSelector } from 'react-redux';

import { useGetRegionsQuery } from '@/api/getAPI';
import { useCurrentDate, usePartOfDay } from '@/helpers/useFormatedData';
import { selectedRegion, setRegion } from '@/redux/slices/regionSlice';
import { useAppDispatch } from '@/redux/store';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const activeRegion = useSelector(selectedRegion);

  const { data, error, isLoading } = useGetRegionsQuery('available/regions');

  const onChangeRegion = (region: string) => {
    dispatch(setRegion(region));
  };

  return (
    <div className="flex justify-between items-center border-b pb-3">
      {/* Greetings & Date today */}
      <div>
        <h1 className="text-3xl font-bold">{usePartOfDay()}</h1>
        <span className="text-sm text-gray-500 font-light">
          {useCurrentDate()}
        </span>
      </div>
      <div className="flex flex-col items-end text-left">
        <span className="inline-block w-full mb-2">Regions:</span>
        {isLoading ? (
          <div>Loading..</div>
        ) : error ? (
          <div></div>
        ) : (
          data?.regions && (
            <div>
              <div className="flex">
                {Object.keys(data?.regions).length && (
                  <select
                    className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                    value={Object.values(data?.regions).find(
                      region => region === activeRegion,
                    )}
                    onChange={e => onChangeRegion(e.target.value)}
                  >
                    {Object.keys(data?.regions)
                      .sort()
                      .map(region => {
                        return (
                          <option
                            key={data?.regions[region]}
                            value={data?.regions[region]}
                          >
                            {region}
                          </option>
                        );
                      })}
                  </select>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
