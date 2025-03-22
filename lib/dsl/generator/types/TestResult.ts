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

import { HttpMethod } from "../../enums"
import { ApiDocOptions } from "../../interface"

/**
 * 테스트 결과 인터페이스
 */
export interface TestResult {
    method: HttpMethod
    url: string
    options: ApiDocOptions
    request: {
        body?: unknown
        headers?: Record<string, string>
    }
    response: {
        status: number
        body?: unknown
        headers?: Record<string, string>
    }
}

/**
 * OAS 생성기 인터페이스
 */
export interface IOpenAPIGenerator {
    collectTestResult(result: TestResult): void
    generateOpenAPISpec(): unknown
}
