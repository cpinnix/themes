import { useDarkMode } from "storybook-dark-mode";
import React from "react";
import { startCase, map } from "lodash-es";
import { tw } from "twind";
import palettes from "../src/palettes";

function Color({ color, name }) {
  const dark = useDarkMode();

  return (
    <div
      {...{
        className: tw(
          `rounded`,
          `overflow-hidden`,
          dark ? `bg-[rgb(60,60,60)]` : `bg-white`,
          `shadow-lg`
        ),
      }}
    >
      <div {...{ style: { height: 96, backgroundColor: color } }} />
      <div
        {...{
          className: tw(`p-4`),
        }}
      >
        <p
          {...{
            className: tw(dark ? `text-gray-400` : `text-gray-600`, `text-sm`),
          }}
        >
          {startCase(name)}
        </p>
        <p
          {...{
            className: tw(dark ? `text-gray-300` : `text-black`, `text-sm`),
          }}
        >
          {color}
        </p>
      </div>
    </div>
  );
}

function Test({ theme }) {
  const backgroundColor = palettes.backgroundColor(theme);
  const borderColor = palettes.borderColor(theme);
  const textColor = palettes.textColor(theme);

  return (
    <div {...{ className: tw(`grid`, `grid-cols-16`, `gap-4`, `items-start`) }}>
      <div
        {...{
          className: tw(
            `col-span-10`,
            `rounded`,
            `shadow-lg`,
            `p-6`,
            `grid`,
            `grid-cols-6`,
            `gap-6`
          ),
          style: { backgroundColor: backgroundColor(0) },
        }}
      >
        {[...new Array(11)].map((_, index) => (
          <div
            {...{
              className: tw(`rounded`, `border`, `inline-block`),
              style: {
                height: 44,
                backgroundColor: backgroundColor(-5 + index),
                borderColor: borderColor(-4 + index),
              },
            }}
          />
        ))}
      </div>
      <div
        {...{
          className: tw(`col-span-6`, `rounded`, `shadow-lg`),
          style: { backgroundColor: backgroundColor(0) },
        }}
      >
        <div
          {...{
            className: tw(`p-6`, `border-b`),
            style: { borderColor: borderColor(1) },
          }}
        >
          <h1
            {...{
              className: tw(`font-bold`, `text-lg`),
              style: { color: textColor(0) },
            }}
          >
            Title
          </h1>
        </div>
        <div {...{ className: tw(`p-6`, `space-y-4`) }}>
          <div
            {...{
              className: tw(`rounded`, `border`),
              style: {
                padding: 24,
                backgroundColor: backgroundColor(1),
                borderColor: borderColor(2),
              },
            }}
          />
          <p {...{ className: tw(`text-sm`), style: { color: textColor(0) } }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            condimentum orci arcu, a ornare eros suscipit at. Etiam dictum sem
            vitae ante fringilla, id consectetur nisl rhoncus. Vivamus rutrum,
            est non semper placerat, augue odio hendrerit massa, in efficitur mi
            turpis scelerisque enim.
          </p>
        </div>
        <div
          {...{
            className: tw(`p-6`, `border-t`, `flex`, `justify-end`, `gap-4`),
            style: { borderColor: borderColor(1) },
          }}
        >
          <div
            {...{
              className: tw(`rounded`, `border`),
              style: {
                width: 72,
                height: 44,
                backgroundColor: backgroundColor(1),
                borderColor: borderColor(2),
              },
            }}
          />
        </div>
      </div>
      <div
        {...{
          className: tw(
            `col-span-16`,
            `rounded`,
            `shadow-lg`,
            `p-6`,
            `grid`,
            `grid-cols-6`,
            `gap-6`
          ),
          style: { backgroundColor: backgroundColor(0) },
        }}
      >
        {[...new Array(11)].map((_, index) => (
          <p
            {...{
              className: tw(`text-sm`),
              style: { color: textColor(-5 + index) },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            condimentum orci arcu, a ornare eros suscipit at.
          </p>
        ))}
      </div>
    </div>
  );
}

function Scale({ name, scale, themeName }) {
  const dark = useDarkMode();

  return (
    <div {...{ className: tw(`space-y-4`) }}>
      <div
        {...{ className: tw(dark ? `text-white` : `text-black`, `text-sm`) }}
      >
        {name}
      </div>
      <div
        {...{
          className: tw(`grid`, `grid-cols-8`, `gap-4`),
        }}
      >
        {map(scale, (color) => (
          <Color {...{ color, name: themeName }} />
        ))}
      </div>
    </div>
  );
}

export default function Display({ theme }) {
  return (
    <div {...{ className: tw(`space-y-8`) }}>
      <Test {...{ theme }} />
      <div {...{ className: tw(`space-y-8`) }}>
        {theme.backgroundColor && (
          <Scale
            {...{
              name: "Background Color",
              scale: theme.backgroundColor,
              themeName: theme.name,
            }}
          />
        )}
        {theme.borderColor && (
          <Scale
            {...{
              name: "Border Color",
              scale: theme.borderColor,
              themeName: theme.name,
            }}
          />
        )}
        {theme.textColor && (
          <Scale
            {...{
              name: "Text Color",
              scale: theme.textColor,
              themeName: theme.name,
            }}
          />
        )}
        {!theme.backgroundColor && theme.primary && (
          <Scale
            {...{
              name: "Primary",
              scale: theme.primary,
              themeName: theme.name,
            }}
          />
        )}
        {theme.secondary && (
          <Scale
            {...{
              name: "Secondary",
              scale: theme.secondary,
              themeName: theme.name,
            }}
          />
        )}
        {!theme.textColor && theme.text && (
          <Scale
            {...{
              name: "Text",
              scale: theme.text,
              themeName: theme.name,
            }}
          />
        )}
      </div>
    </div>
  );
}
