// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

// esri.core
import Accessor = require("esri/core/Accessor");

// esri.core.accessorSupport
import { subclass, property } from "esri/core/accessorSupport/decorators";

@subclass("SelectedFeatureAttachments")
class SelectedFeatureAttachments extends Accessor {
  @property()
  attachments: __esri.Collection<__esri.AttachmentInfo> = null;

  @property()
  currentIndex: number = null;
}

export = SelectedFeatureAttachments;
