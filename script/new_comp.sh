#!/bin/bash

if [ "$1" == "-h" ]; then
  echo """
Create a new component

Usage: ./script/new_comp.sh <ComponentName> <subdirectory>

Options:
  -h: Display this dialogue

Params:
  <ComponentName>: The name of the component. REQUIRED

  <subdirectory>: The directory within 'src' that the
                    component will be placed in. OPTIONAL
                   - Defaults to 'components'.
"""
  exit
fi

CNAME="$1"
if [ -z $CNAME ]; then
    echo "Component Name required."
    exit
fi

SUBDIR="$2"
if [ -z "$2" ]; then
  SUBDIR="components"
fi
COMP_DIR="./src/$SUBDIR/$CNAME"
if [ -d "$COMP_DIR" ]; then
    echo ""
    printf "Component directory $COMP_DIR exists, replace with new component? (yes/no) "
    read confirmation
    if [ $confirmation != "yes" ]; then
        exit
    fi
    rm -rf "$COMP_DIR"
fi
mkdir "$COMP_DIR"
JSX="$COMP_DIR/$CNAME.js"
touch "$JSX"
CSS="$COMP_DIR/$CNAME.css"
touch "$CSS"

LOWER_CNAME=$(echo "$CNAME" | awk '{print tolower($0)}')
FIRST_LOWER_CNAME="$(echo ${CNAME:0:1} | tr '[:upper:]' '[:lower:]')${CNAME:1}"
SNAKE_CNAME=$(echo "$FIRST_LOWER_CNAME" | sed 's/\([A-Z]\)/-\1/g' | awk '{print tolower($0)}')

cat > "$JSX" << JSX
import React, { Component } from 'react';
import './${CNAME}.css';

class ${CNAME} extends Component {
  render() {
    return (
      <div className="${CNAME}">
      </div>
    );
  }
}

export default ${CNAME};
JSX

cat > "$CSS" << CSS
.${CNAME} {
}
CSS

echo "export { default as ${CNAME} } from './${CNAME}/${CNAME}';" >> "./src/$SUBDIR/index.js";

echo '''
'${CNAME}' created successfully. Import it using:

import { '${CNAME}' } from "'${SUBDIR}'";
'''
