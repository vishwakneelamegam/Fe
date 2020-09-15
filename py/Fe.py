class functionExecutor:
    def functionCall(self,meth,argument=0):
        try:
            if argument == 0:
                return meth()
            else:
                return meth(argument)
        except Exception as e:
            return False
    def textParsing(self,text,jsonObject):
        try:
            splitText = text.split(" ")
            filterFunc = list(set(jsonObject["functions"]) & set(splitText))
            filterLen = len(filterFunc)
            if filterLen > 0:
                funcName = jsonObject[filterFunc[0]]["name"]
                funcArgs = jsonObject[filterFunc[0]]["argument"]
                argsLen = len(funcArgs)
                if argsLen <= 0:
                    return self.functionCall(funcName)
                if argsLen > 0:
                    argsVal = list(set(funcArgs) & set(splitText))
                    argsValLen = len(argsVal)
                    if argsValLen > 0:
                        return self.functionCall(funcName,argsVal[0])
                    if argsValLen <= 0:
                        return False
            if filterLen <= 0:
                return False
        except Exception as e:
            return False

