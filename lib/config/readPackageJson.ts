/*
 * Copyright 2025 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as fs from "fs"
import * as path from "path"
import logger from "./logger"
/**
 *
 */
export function readPackageJson(): any {
    const packageJsonPath = path.resolve(process.cwd(), "package.json")
    try {
        const packageJsonData = fs.readFileSync(packageJsonPath, "utf8")
        return JSON.parse(packageJsonData)
    } catch (error) {
        logger.error("package.json을 읽는 중 오류 발생.", error)
        return null
    }
}
