<div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Название раздела</th>
                  <th>Последняя тема</th>
                  <th>Автор</th>
                  <th>Дата</th>
                </tr>
              </thead>
              @foreach($sections as $section)
              <tbody>
                <tr>
                  <td><a href="/posts/{{ $section->id }}">{{ $section->section }}</a></td>
                  <td>---</td>
                  <td>---</td>
                  <td>{{ $section->created_at->toFormattedDateString() }}</td>
                </tr>
              </tbody>
              @endforeach
            </table>
          </div>