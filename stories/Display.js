import { useDarkMode } from "storybook-dark-mode";
import React from "react";
import { map } from "lodash-es";
import { tw } from "twind";

export default function Display({ theme }) {
  const dark = useDarkMode();

  return (
    <div {...{ className: tw(`flex`, dark ? `text-white` : `text-black`) }}>
      <table
        {...{
          className: tw(`table-auto`),
        }}
      >
        {map(theme.primary, (color) => (
          <tr>
            <td>
              <div
                {...{
                  style: {
                    width: 48,
                    paddingTop: 48,
                    backgroundColor: color,
                  },
                }}
              />
            </td>
            <td
              {...{
                className: tw(`px-4`, `font-mono`, `text-xs`),
              }}
            >
              {color}
            </td>
          </tr>
        ))}
      </table>
      <table
        {...{
          className: tw(`table-auto`),
        }}
      >
        {map(theme.secondary, (color) => (
          <tr>
            <td>
              <div
                {...{
                  style: {
                    width: 48,
                    paddingTop: 48,
                    backgroundColor: color,
                  },
                }}
              />
            </td>
            <td
              {...{
                className: tw(`px-4`, `font-mono`, `text-xs`),
              }}
            >
              {color}
            </td>
          </tr>
        ))}
      </table>
      <table
        {...{
          className: tw(`table-auto`),
        }}
      >
        {map(theme.text, (color) => (
          <tr>
            <td>
              <div
                {...{
                  style: {
                    width: 48,
                    paddingTop: 48,
                    backgroundColor: color,
                  },
                }}
              />
            </td>
            <td
              {...{
                className: tw(`px-4`, `font-mono`, `text-xs`),
              }}
            >
              {color}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
