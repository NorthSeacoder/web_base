#!/usr/local/bin/bash

# 去除前后空格
trim() {
    # Usage: trim "   example   string    "
    : "${1#"${1%%[![:space:]]*}"}"
    : "${_%"${_##*[![:space:]]}"}"
    printf '%s\n' "$_"
}
# 去除所有空格
trim_all() {
    # Usage: trim_all "   example   string    "
    set -f
    set -- $*
    printf '%s\n' "$*"
    set +f
}

# 用分隔符分割字符串
split() {
   # Usage: split "string" "delimiter"
   IFS=$'\n' read -d "" -ra arr <<< "${1//$2/$'\n'}"
   printf '%s\n' "${arr[@]}"
}

# 转小写
lower() {
    # Usage: lower "string"
    printf '%s\n' "${1,,}"
}

# 转大写
upper() {
    # Usage: upper "string"
    printf '%s\n' "${1^^}"
}

echo $BASH_VERSION
